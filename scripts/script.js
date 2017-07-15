var projects = [
    {
        id: 1,
        name: "Envision University",
        description: "A c#-based, kentico web application with a heavy emphasis on accessibility. Lead developer on project while employed at ntara.",
        technology: ['C#', 'HTML', 'LESS', 'Javascript', 'jQuery', 'Kentico CMS', 'SQL Server'],
        url: "http://university.envisionus.com",
        github: "",
        screenshotClass: "envision-university"
    },
    {
        id: 2,
        name: "Bosma",
        description: "A c#-based, kentico web application with a heavy emphasis on accessibility. Worked as a back-end developer on this while at ntara.",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "http://www.bosma.org",
        github: "",
        screenshotClass: "bosma"
    },
    {
        id: 3,
        name: "Vivid Ciphers",
        description: "An angular-based group collaboration project.",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "http://www.vividciphers.com",
        github: "https://github.com/VividCiphers/vivid-ciphers-website",
        screenshotClass: "vivid-ciphers"
    },
    {
        id: 4,
        name: "Tribute Page",
        description: "A personal project utilizing vanilla CSS and HTML developed for FreeCodeCamp.",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "https://codepen.io/ryanjgross/pen/pepQpa",
        github: "https://github.com/rjg-fizen/tribute-page",
        screenshotClass: "tribute-page"
    },
    {
        id: 5,
        name: "Big Tim's Plumbing",
        description: "A personal project utilizing vanilla CSS, HTML, and Javascript.  Developed as part of a design series. ",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "",
        github: "",
        screenshotClass: "big-tim"
    },
    {
        id: 6,
        name: "Number Guesser",
        description: "A personal project utilizing vanilla CSS, HTML, and Javascript. This one is a little bit heavier on the Javascript.",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "https://codepen.io/ryanjgross/pen/acb1ec1c6a072484e24cef2999afe826",
        github: "https://codepen.io/ryanjgross/pen/9556847874ef0f8a46ce308e8aace328",
        screenshotClass: "number-guesser"
    },
];


$(function () {

    projects.map(function (project) {
        $('.work').find('.flex')
            .append('<div class="flex-cell four-column center"><div class="screenshot '
            + project.screenshotClass
            + ' bottom"><div class="screenshot-info wrap" data-project="'
            + project.id
            + '"><div class="screenshot-info-header center flex-cell one-column"><p class="ninety-percent">'
            + project.name
            + '</p><span class="expand"><i class="fa fa-expand" aria-hidden="true"></i></span></div>'
            + '<div class="screenshot-info-body hidden"><p>'
            + project.description + '</p>'
            + '<div class="links center"><a href="'
            + project.url
            + '" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a><a href="'
            + project.github
            + '" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></div>'
            + '</div></div></div></div>');
    })

    var screenShotInfoBodyToggle = function () {
        var that = $(this);
        var screenshotInfo = $(this).closest('.screenshot-info');
        screenshotInfo.removeClass('center');

        screenshotInfo.animate({
            height: "300px"
        }, 500, function () {
            screenshotInfo.find('.screenshot-info-body').removeClass('hidden');

            that.off();

            that.on('click', function () {
                screenshotInfo.animate({
                    height: '35px'
                }, 500, function () {
                    $(this).removeAttr('style');
                });

                $(this).off();
                $(this).on('click', screenShotInfoBodyToggle);
                screenshotInfo.find('.screenshot-info-body').addClass('hidden');
            })
        });
    };

    $('.screenshot-info-header').on('click', screenShotInfoBodyToggle);

    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        var nav = $('.top-nav');

        nav.removeClass('nav-scroll-stop');
        nav.addClass('nav-scroll-start');

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            if (scrollPos >= 200)
                nav.addClass('white-color');
            else
                nav.removeClass('white-color');

            nav.removeClass('nav-scroll-start');
            nav.addClass('nav-scroll-stop')
        }, 800));

    })
});
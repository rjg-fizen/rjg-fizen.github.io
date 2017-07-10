var projects = [
    {
        id: 1,
        name: "Envision University",
        description: "A web application developed during my time at ntara. ",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "",
        github: "",
        screenshotClass: "envision-university"
    },
    {
        id: 2,
        name: "Bosma",
        description: "",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "",
        github: "",
        screenshotClass: "bosma"
    },
    {
        id: 3,
        name: "Vivid Ciphers",
        description: "",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "",
        github: "",
        screenshotClass: "vivid-ciphers"
    },
    {
        id: 4,
        name: "Tribute Page",
        description: "",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "",
        github: "",
        screenshotClass: "tribute-page"
    },
    {
        id: 5,
        name: "Big Tim's Plumbing",
        description: "",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "",
        github: "",
        screenshotClass: "big-tim"
    },
    {
        id: 6,
        name: "Number Guesser",
        description: "",
        technology: ['C#', 'HTML', 'LESS', 'JAVSCRIPT', 'JQUERY', 'KENTICO CMS', 'SQL SERVER'],
        url: "",
        github: "",
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
            + '<div class="screenshot-info-body">'
            + '<p>' +  project.description + '</p>'
            +  project.technology.join(',')
            + '</div></div></div></div>');
    })

    $('.expand').on('click', function () {
        var screenshotInfo = $(this).closest('.screenshot-info');
        screenshotInfo.removeClass('center');
      
        screenshotInfo.animate({
            height: "300px"
        }, 500, function () {
           
            // var projectName = screenshotInfo.data('project');


            // var currentProject = projects.filter(function(project){
            //     return project.id == projectName;
            // })[0];


            // var list = "";
            // currentProject.technology.map(function(tech){
            //     list += "<li>" + tech + "</li>";
            // });

            // screenshotInfo.find('.screenshot-info-body').append("<ul class='tech-list'>" + list + "</ul>");
           
            $('.screenshot').on('click', function () {
                $(this).find('.screenshot-info').removeAttr('style');
                $(this).off();
            })
        });
    })



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
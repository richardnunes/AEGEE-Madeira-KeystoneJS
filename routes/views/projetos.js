var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'projetos';

    locals.info = {
        text1: "AEGEE-Europe’s projects are a set of ideas which have been turned into reality by motivated members. These projects, including the Flagship Project, are decided and implemented by the association as a whole and can call on the resources of AEGEE-Europe for support. They deal with topics of interest for the European youth in general. These European projects are coordinated by international teams and consist of actions taken in several countries. These actions are usually varied, and creativity is crucial for developing a successful project: conferences, seminars, action days, contests, and any other way of involving young people in the topic can contribute to a project.",
        text2: "Below you can find more information about AEGEE-Europe’s currently running and past projects.",

        title: "Projectos Atuais",

        projects: [
            {name: "Summer University", img: "images/projetos/su.png", link: "http://www.aegee.org/projects/summer-university/"},
            {name: "Eastern Partnership Project", img: "images/projetos/epp.jpg", link: "http://www.aegee.org/projects/eastern-partnership/"},
            {name: "Y Vote 2014", img: "images/projetos/yv.png", link: "http://www.aegee.org/yvote2014/"},
            {name: "Health4Youth", img: "images/projetos/h4y.png", link: "http://www.aegee.org/projects/health4youth/"},
            {name: "Europe in Exchange", img: "images/projetos/eie.png", link: "http://www.aegee.org/projects/europe-in-exchange/"},
            {name: "EuroArab", img: "images/projetos/ea.jpg", link: "http://www.aegee.org/projects/euroarab/"},
            {name: "Youth unEmployment", img: "images/projetos/yu.png", link: "http://www.aegee.org/projects/youth-unemployment/"}
        ]
    };

    // Render the view
    view.render('projetos');

};
var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'projetos';

    locals.info = {
        text1: "Os projetos da AEGEE-Europa são um conjunto de idéias que se transformaram em realidade por membros motivados. Estes projectos, incluindo o 'Flagship Project', são decididas e implementadas pela associação como um todo e pode chamar os recursos da AEGEE-Europe para o apoio. Estes lidam com temas de interesse para a juventude europeia em geral. Estes projectos europeus são coordenados por equipas internacionais e consistem em ações realizadas em vários países. Estas ações geralmente são variados, e a criatividade é fundamental para o desenvolvimento de um projeto de sucesso: conferências, seminários, dias de ação, concursos e qualquer outra forma de envolver os jovens no tópico pode contribuir para um projeto.",
        text2: "Abaixo, podes encontrar mais informações sobre os projetos da AEGEE-Europa atualmente em execução.",

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
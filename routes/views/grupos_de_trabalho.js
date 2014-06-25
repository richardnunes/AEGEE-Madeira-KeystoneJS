var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'grupos-de-trabalho';

    locals.info = {
        title: "Grupos de Trabalho da AEGEE",
        text: "Os Grupos de Trabalho ou Working Groups (WGs) satisfazem assuntos específicos que são de importância para AEGEE, formando as suas próprias iniciativas e apoiando os habitantes locais com informações e conteúdos para seus eventos. Ao visitar as páginas abaixo, podes encontrar mais informações sobre os Grupos de Trabalho da AEGEE-Europa.",

        groups: [
            {name: "AEGEE-Academy", link: "http://www.aegee.org/wgs/aegee-academy/", img:"images/working_groups/aca.png"},
            {name: "Culture Working Group", link: "http://www.aegee.org/wgs/culture-working-group/", img:"images/working_groups/cwg.png"},
            {name: "Education Working Group", link: "http://www.aegee.org/wgs/education-working-group/", img:"images/working_groups/aca.png"},
            {name: "Environmental Working Group", link: "http://www.aegee.org/wgs/environmental-working-group/", img:"images/working_groups/enwg.png"},
            {name: "Human Rights Working Group", link: "http://www.aegee.org/wgs/human-rights-working-group/", img:"images/working_groups/hrwg.png"},
            {name: "International Politics Working Group", link: "http://www.aegee.org/wgs/international-politics-working-group/", img:"images/working_groups/ipwg.png"},
            {name: "Sports Working Group", link: "http://www.aegee.org/wgs/sports-working-group/", img:"images/working_groups/swg.png"},
            {name: "Visa Freedom Working Group", link: "http://www.aegee.org/wgs/visa-freedom-working-group/", img:"images/working_groups/vfwg.png"},
            {name: "Language Working Group", link: "http://www.aegee.org/wgs/language-working-group/", img:"images/working_groups/lwg.png"}
        ]
    };

    // Render the view
    view.render('grupos-de-trabalho');

};
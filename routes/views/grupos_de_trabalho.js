var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'grupos-de-trabalho';

    locals.info = {
        title: "Grupos de Trabalho da AEGEE",
        text: "Working Groups (WGs) take care of specific subjects that are of importance to AEGEE, coming up with their own initiatives and supporting locals with information and content for their events. By visiting the pages below you can find more information about AEGEE-Europe’s Working Groups.",

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
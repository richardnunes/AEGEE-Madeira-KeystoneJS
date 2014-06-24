var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'summer-university';

    locals.info = {
        title: "Summer University",
        text: "The Summer University Project was born in 1988, with the intention to promote European integration. <strong>Every summer, it mobilises over 2000 young Europeans.</strong> The events of the projects are based on a cultural exchange, where understanding and exploring the multicultural dimension of the European continent, fighting for tolerance and becoming open-minded citizens are common themes. The activities carried out during a Summer University range from academic, such as classes to learn a foreign language, different courses on technical themes to multicultural activities: get familiar with Finnish culture, Spanish history, Greek mythology; learn how to sail, attend a photography course in Turkey or do hike in Polish woods, etc. Moreover, each Summer University follows a concrete theme throughout its duration that can be related to European Integration, International Politics, Active Citizenship, Education, Culture, Peace, Personal Development and many more.",
        img: "images/aegee-su/su_cover.jpg"

        //http://www.aegee.org/events/summer-university/
    };

    // Render the view
    view.render('summer-university');

};
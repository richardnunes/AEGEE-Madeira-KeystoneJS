var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'mapa-rede';

    locals.info = {
        intro:  "<em>Do you see yourself as an open-minded young European?</em><br>" +
                "<em>Are you curious to learn what distinguishes us from any other culture on the planet?</em><br> " +
                "<em>Have you been planning on travelling around the continent and meeting new friends?</em><br>" +
                "<em>Can you imagine yourself taking part in shaping our future together?</em><br>" +
                "<em>All you are lacking is the experience of discovering Europe?</em>",

        become: "If your answer to any of the questions above is ‘YES!’,&nbsp;you should definitely consider <strong>becoming a member of AEGEE</strong>!",
        sub_title: "As an AEGEE member, you can",
        li_elem: [
            "join local events and meetings,",
            "attend international events, such as trainings, conferences, exchanges, or Summer Universities, get involved in the work of international Working Groups and projects,",
            "become part of a community of young Europeans,",
            "and take part in shaping the future of Europe!"
        ],
        join: "Joining AEGEE Madeira",
        join_text: "If you’d like to join AEGEE Madeira, contact us to find out how you can become involved in our activities.",
        mapa_img: "images/mapa/dicover_aegee.jpg"
    };


    // Render the view
    view.render('mapa-rede');

};
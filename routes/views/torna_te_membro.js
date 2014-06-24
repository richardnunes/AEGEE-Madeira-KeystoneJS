var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'torna-te-membro';

    locals.info = {
        title: "How to Join",
        first_para: "<p>You can get involved in many of the activties we organise throughtout the year regardless.</p><p>However, by becoming a member of AEGEE Madeira you can:</p>",
        advantages: [
            "Participate in all European events you want including Summer University.",
            "Participate in exchanges we make with other venues.",
            "Participate in local activities we organize.",
            "Receive regular newsletter of all activities organized by AEGEE Madeira and other AEGEE antenna."
        ],
        heading_second_para: "The steps to become are member are:",
        steps: [
            "1. Register at the AEGEE-Europe website: <a href='http://intranet.aegee.org/login/signUp'>aegee.org</a>",
            "2. Pay by bank transfer the annual membership fee 18€ to the AEGEE Madeira bank account, adding your name and surname as reference: <div class='row'><div class='medium-6 medium-offset-3 columns'>XXXXXXXXXXXXXXX</br>XXXXXXXXXXXXXX</br>XXXXXXXXXXXXXX</br>XXXXXXXXXXXXXX</div></div>",
            "3. Send the receipt of payment to aegee.madeira@gmail.com"
        ],
        last_para: "<p>As soon as we receive the payment and you appear as a AEGEE Madeira member in intranet, we will confirm your membership and you will start to receive all the news from AEGEE-Europe and the antenna.</p>"
                  +"<p>Remember that the AEGEE-Europe intranet is managed by AEGEE-Europe directly. Consequently, if you want to change your antenna or have any issue during the registration process in the official website, you need to contact &quot;myAEGEE Team&quot; (myaegee@aegee.org).</p>"
                  +"<p>We look forward to meeting you!</p>"



    }

    // Render the view
    view.render('torna-te-membro');

};
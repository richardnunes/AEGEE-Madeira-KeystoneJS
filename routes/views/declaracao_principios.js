var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'declaracao-principios';

    locals.info = {
        title: "Declaracão de Princípios",
        title1: "We, the members of AEGEE,",
        text1: "young Europeans coming from all regions of the continent, recognise that we are the future and present of our society and that our contribution to the construction of Europe is our responsibility. We come together under a common vision of a democratic, diverse and borderless Europe.",
        text2: "We come together in AEGEE to form an open, voluntary network where we transform our ideas into actions, develop ourselves to participate actively in society, and contribute to the European debate with our independent student’s perspective.",
        title2: "We hereby declare these principles to be fundamental to us:",
        principals: [
            "<strong><span style='color: #1468b3;'>The diversity of Europe has to be valued</span></strong>, and we reflect it in our organisation. The richness of our continent relies on people from different cultures and backgrounds coming together and being united by common values.",
            "<strong><span style='color: #1468b3;'>Cooperation between people and communities begins with dialogue and mutual understanding.</span></strong>&nbsp; We bring together students from all regions of Europe and create friendships that break stereotypes and prejudices.",
            "<span style='color: #1468b3;'><strong>Freedom and human rights are essential elements of a European society.</strong>&nbsp;</span> Through our work and behaviour, we aim to serve as an example and spread these values among the youth of our continent.",
            "<strong><span style='color: #1468b3;'>A strong Europe is built upon the foundations of respect, tolerance and solidarity.</span></strong>&nbsp; Following these values, we stand for an inclusive society where citizens enjoy equal opportunities and rights.",
            "<strong><span style='color: #1468b3;'>Progress in Europe has to be based on knowledge and unlimited access to education.</span></strong>&nbsp; By providing diverse learning opportunities and supporting a European dimension in education, we believe it gives young people better opportunities for the future.",
            "By honoring and promoting these principles we shape a better Europe.",
            "<em>Approved at Autumn Agora Zaragoza 2013</em>"
        ]

    };

    // Render the view
    view.render('declaracao-principios');

};
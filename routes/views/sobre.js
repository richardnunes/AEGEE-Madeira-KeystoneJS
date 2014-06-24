var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'sobre';

    locals.info = {
        main_title: "Sobre a AEGEE",
        intro_text: "A AEGEE é uma das maiores organizações interdisciplinares de estudantes da Europa. Sendo uma organização não-governamental, politicamente independente e sem fins lucrativos a AEGEE é aberto a estudantes e jovens de todas as faculdades e disciplinas. Fundada no ano 1985, em Paris, a AEGEE atualmente tem uma rede de 13 mil amigos, presentes em 200 cidades em 40 países em toda a Europa.",
        blockquote: "A AEGEE coloca a ideia de uma Europa unificada em prática. A AEGEE opera a nível internacional e leva 13 mil estudantes de 40 países diferentes em contato direto uns com os outros.",
        sobre_img: "images/sobre/sobre.jpg",

        vision_title: "Visão",
        vision_text: "A AEGEE procura alcançar uma Europa democrática, diversificada e sem fronteiras, que é socialmente, economicamente e politicamente integrada, e valoriza a participação dos jovens na sua construção e desenvolvimento.",
        vision_img: "images/sobre/Vision.jpg",

        mission_title: "Missão",
        mission_text: "A AEGEE permite aos alunos e jovens da Europa a ter um papel activo na sociedade. Ela cria um espaço de diálogo e oportunidades de aprendizagem, e também atua como representante destes perante os responsáveis pela tomada de decisões. Além disso, AEGEE fortalece o entendimento mútuo e traz a Europa mais próxima dos jovens.",
        mission_img: "images/sobre/Mission2.jpg",

        exchange_title: "Intercultural Exchange",
        exchange_text: "AEGEE creates a space for members of different backgrounds to meet and learn about cultural differences, in order to foster mutual understanding. AEGEE supports mobility and encourages young people to cross borders and make new friends, to break stereotypes and strengthen tolerance, respect and solidarity.",
        exchange_img: "images/sobre/Intercultural-Exchange.jpg",

        education_title: "Personal Development and Non Formal Education",
        education_text: "AEGEE provides learning opportunities for the development of its members through non-formal education and informal learning. By participating in trainings courses, workshops, and active involvement in the organisation, our members improve their competences (such as leadership skills, communication skills and team management) which will be useful for their future lives.",
        education_img: "images/sobre/Personal-Development.jpg",

        projects_title: "Thematic Projects",
        projects_text: "Thematic projects, either local or international, are initiatives developed by members of AEGEE. They deal with current challenges in the European society, create awareness among young people and propose solutions from a student point of view. The outcome of this work has an impact in- and outside of AEGEE.",
        projects_img: "images/sobre/Thematic-Projects.jpg",

        advocacy_title: "Advocacy and Policy",
        advocacy_text: "AEGEE gathers the opinions of European students and represents them towards  stakeholders through campaigns, lobby actions, conferences and membership in bigger advocacy platforms. In addition, AEGEE informs students and young people about the impact which European policies have in their lives and opportunities they offer",
        advocacy_img: "images/sobre/Policy-and-Advocacy.jpg",

        forum_title: "Forum for Discussion",
        forum_text: "AEGEE provides a space for young Europeans to discuss and exchange different points of view with a European perspective,in order to find a common ground. This exchange of ideas happens in all our activities but a special place for them is our Working groups, conferences and General Assemblies (EBM & Agora).",
        forum_img: "images/sobre/Forum-for-Discussion.jpg"
    };


    // Render the view
    view.render('sobre');
};
var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'summer-university';

    locals.info = {
        title: "Summer University",
        text: "O Projeto Universidade de Verão nasceu em 1988, com a intenção de promover a integração Europeia. <strong>Cada verão, mobiliza mais de 2000 jovens Europeus.</strong> Os eventos dos projetos são baseadas no intercâmbio cultural, onde a compreensão e exploração da dimensão multicultural do continente europeu, a luta pela tolerância e a formação de cidadãos de mente aberta são temas comuns. As atividades realizadas durante uma Universidade de Verão vão desde assuntos acadêmicos, tais como aulas para aprender uma língua estrangeira, cursos diferentes em temas técnicos às actividades multiculturais: familiariza-te com a cultura finlandesa, história espanhola, a mitologia grega; aprende a velejar, participa num curso de fotografia na Turquia ou faz uma caminhada numa floresta Polaca, etc. Além disso, cada Universidade de Verão segue um tema concreto ao longo de sua duração, que pode estar relacionado com a Integração Europeia, Política Internacional, Cidadania Ativa, Educação, Cultura, Paz, Desenvolvimento Pessoal e muitos mais.",
        img: "images/aegee-su/su_cover.jpg"

        //http://www.aegee.org/events/summer-university/
    };

    // Render the view
    view.render('summer-university');

};
var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'mapa-rede';

    locals.info = {
        intro:  "<em>Vês-te como um jovem Europeu de mente aberta?</em><br>" +
                "<em>Estás curioso para saber o que nos distingue de qualquer outra cultura no planeta?</em><br> " +
                "<em>Já pensaste em viajar à volta do continente e fazer novos amigos?</em><br>" +
                "<em>Consegues imaginar-te a dar forma ao nosso futuro juntos?</em><br>" +
                "<em>Tudo que falta é a experiência de descobrir a Europa?</em>",

        become: "Se a tua resposta a qualquer uma das perguntas acima é ‘SIM!’,&nbsp;deves considerar definitivamente <strong>tornar-te um membro da AEGEE</strong>!",
        sub_title: "Sendo membro AEGEE, podes",
        li_elem: [
            "participar em eventos e reuniões locais,",
            "assistir a eventos internacionais, tais como treinos, conferências, intercâmbios, ou Universidades de Verão (Summer Universities), envolver-te em trabalho de Grupos de Trabalho a nível internacional e projetos,",
            "integrar-te numa comunidade de jovens Europeus,",
            "e participar na formação do futuro da Europa!"
        ],
        join: "Junta-te à AEGEE Madeira",
        join_text: "Se queres tornar-te membro da AEGEE Madeira, dá um clique no botão abaixo onde encontrás mais informações, e como podes envolver-te nas nossas atividades.",
        mapa_img: "images/mapa/dicover_aegee.jpg"
    };


    // Render the view
    view.render('mapa-rede');

};
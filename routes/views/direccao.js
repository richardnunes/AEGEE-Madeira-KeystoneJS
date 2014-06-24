var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'direccao';

    locals.info = {
        title: "Conheçe a nossa equipa",
        text: "Our Board Team consists of enthusiastic and motivated young individuals aiming to create an open and tolerant society of today and tomorrow.",
        members: [
            {
                i: 0,
                name:"Francisco Azevedo",
                cargo: [
                    "Presidente<br>Tesoureiro"
                ],
                foto: "images/fotos_dir/francisco.jpg"
            },
            {
                i: 1,
                name:"Roberto Jesus",
                cargo: [
                    "Vice-Presidente<br>Outgoings"
                ],
                foto: "images/fotos_dir/roberto.jpg"
            },
            {
                i: 2,
                name:"Rúben Santos",
                cargo: [
                    "Secretary"
                ],
                foto: "images/fotos_dir/ruben.jpg"
            },
            {
                i: 3,
                name:"Carolina Costa",
                cargo: [
                    "Erasmus"
                ],
                foto: "images/fotos_dir/carolina.jpg"
            },
            {
                i: 4,
                name:"Richard Nunes",
                cargo: [
                    "Information Tecnologies<br>Material Designer"
                ],
                foto: "images/fotos_dir/richard.jpg"
            },
            {
                i: 5,
                name:"Ricardo Gonçalves",
                cargo: [
                    "Relações Externas"
                ],
                foto: "images/fotos_dir/ricardo.png"
            },
        ]

        //Board Info
    };

    // Render the view
    view.render('direccao');

};
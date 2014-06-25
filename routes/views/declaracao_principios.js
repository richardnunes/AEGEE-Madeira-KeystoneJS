var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'declaracao-principios';

    locals.info = {
        title: "Declaracão de Princípios",
        title1: "Nós, os membros de AEGEE,",
        text1: "jovens Europeus provenientes de todas as regiões do continente, reconhecemos que somos o futuro e o presente da nossa sociedade e que a nossa contribuição para a construção da Europa é a nossa responsabilidade. Nós reunímo-nos sob uma visão comum de uma Europa democrática, diversificada e sem fronteiras.",
        text2: "Nós reunímo-nos na AEGEE para formar uma rede voluntária aberta, onde podemos transformar as nossas idéias em ações, desenvolver-nos a participar activamente na sociedade e contribuir para o debate Europeu com a perspectiva independente de aluno.",
        title2: "Declaramos estes princípios a ser fundamental para nós:",
        principals: [
            "<strong><span style='color: #1468b3;'>A diversidade da Europa tem de ser valorizado</span></strong>, e refleti-la na nossa organização. A riqueza do nosso continente depende de pessoas de diferentes culturas e origens que se unem e sendo unidos por valores comuns.",
            "<strong><span style='color: #1468b3;'>A cooperação entre as pessoas e as comunidades começa com o diálogo e a compreensão mútua.</span></strong>&nbsp; Nós juntamos estudantes de todas as regiões da Europa e criamos amizades que quebram estereótipos e preconceitos.",
            "<strong><span style='color: #1468b3;'>A liberdade e os direitos humanos são elementos essenciais de uma sociedade europeia.</span></strong>&nbsp; Através do nosso trabalho e do comportamento, o nosso objetivo é servir de exemplo e difundir estes valores entre os jovens do nosso continente.",
            "<strong><span style='color: #1468b3;'>Uma Europa forte é construída sobre os alicerces de respeito, tolerância e solidariedade.</span></strong>&nbsp; Seguindo estes valores, nós lutamos por uma sociedade inclusiva, onde os cidadãos disfrutam de igualdade de oportunidades e direitos.",
            "<strong><span style='color: #1468b3;'>O progresso na Europa tem de ser baseada no conhecimento e acesso ilimitado à educação.</span></strong>&nbsp; Ao oferecer diversas oportunidades de aprendizagem e apoiando a dimensão Europeia na educação, acreditamos que proporciona aos jovens melhores oportunidades para o futuro.",
            "Honrando e promovendo estes princípios formamos uma Europa melhor.",
            "<em>Aprovado na Ágora de outono em Zaragoza 2013</em>"
        ]

    };

    // Render the view
    view.render('declaracao-principios');

};
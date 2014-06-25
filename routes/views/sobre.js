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

        exchange_title: "Câmbio Intercultural",
        exchange_text: "A AEGEE cria um espaço para os membros de diferentes origens para encontrar e descobrir as diferenças culturais, a fim de promover a compreensão mútua. A AEGEE apoia a mobilidade e incentiva os jovens a atravessar as fronteiras e fazer novos amigos, para quebrar estereótipos e reforçar a tolerância, respeito e solidariedade.",
        exchange_img: "images/sobre/Intercultural-Exchange.jpg",

        education_title: "Desenvolvimento Pessoal e Educação Não Formal",
        education_text: "A AEGEE oferece oportunidades de aprendizagem para o desenvolvimento dos seus membros por meio da educação não formal e de aprendizagem informal. Através da participação em cursos de treino, workshops e participação ativa na organização, os nossos membros vêm a melhorar suas competências (como a capacidade de liderança, habilidades de comunicação e gestão de equipa), que será útil nos seus futuros.",
        education_img: "images/sobre/Personal-Development.jpg",

        projects_title: "Projetos Temáticos",
        projects_text: "Projectos temáticos, locais ou internacionais, são iniciativas desenvolvidas por membros da AEGEE. Estes lidam com os desafios atuais na sociedade Europeia, criar sensibilidade entre os jovens e propor soluções a partir de um ponto de vista do aluno. O resultado deste trabalho tem um impacto dentro e fora da AEGEE.",
        projects_img: "images/sobre/Thematic-Projects.jpg",

        advocacy_title: "Advocacia e Política",
        advocacy_text: "A AEGEE recolhe as opiniões dos estudantes Europeus e representa-os aos intervenientes, através de campanhas, ações de lobby, conferências e participação em plataformas de defesa maiores. Além disso, a AEGEE informa os estudantes e os jovens sobre o impacto que as políticas Europeias têm nas suas vidas e as oportunidades que elas oferecem.",
        advocacy_img: "images/sobre/Policy-and-Advocacy.jpg",

        forum_title: "Fórum de Discussão",
        forum_text: "A AEGEE fornece um espaço para os jovens europeus para discutir e trocar pontos de vista diferentes com uma perspectiva Europeia, a fim de encontrar um interesse comum. Esta troca de idéias acontece em todas as nossas atividades, mas um lugar especial para eles são os nossos Grupos de trabalho, conferências e Assembleias Gerais (EBM e Ágora).",
        forum_img: "images/sobre/Forum-for-Discussion.jpg"
    };


    // Render the view
    view.render('sobre');
};
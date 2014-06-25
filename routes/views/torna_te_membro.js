var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'torna-te-membro';

    locals.info = {
        title: "Como aderir?",
        first_para: "<p>És sempre bem-vindo/a a participar e envolver-te nas nossa atividades que organisamos ao longo do ano, independentemente seres membro ou não.</p><p>No entanto, ao tornar-te um membro da AEGEE Madeira podes:</p>",
        advantages: [
            "Participar em todos os eventos Europeus que desejas incluindo as Universidades de Verão.",
            "Participar em intercâmbios que fazemos com outros locais.",
            "Participar em atividades locais que organizamos.",
            "Receber newsletter periódico de todas as atividades organizadas pela AEGEE Madeira e pelas outras antenas da AEGEE."
        ],
        heading_second_para: "Os passos para se tornar membro são:",
        steps: [
            "1. Regista-te no site da AEGEE-Europa: <a href='http://intranet.aegee.org/login/signUp'>www.aegee.org</a>",
            "2. Realizar o pagamento por transferência bancária a quota anual de 18€ para a conta bancária AEGEE Madeira, adicionando teu nome e sobrenome como referência: <div class='row'><div class='medium-6 medium-offset-3 columns'>XXXXXXXXXXXXXXX</br>XXXXXXXXXXXXXX</br>XXXXXXXXXXXXXX</br>XXXXXXXXXXXXXX</div></div>",
            "3. Enviar o comprovativo de pagamento para <a href='mailto:aegee.madeira@gmail.com?Subject=Comprovativo%20Pagamento' target='_top'>aegee.madeira@gmail.com</a>"
        ],
        last_para: "<p>Assim que recebermos o pagamento e apareces como um membro AEGEE Madeira na intranet, iremos confirmar a tua inscrição logo que possível.</p>"
                  +"<p>Lembra-te que a intranet AEGEE-Europa é gerida pela AEGEE-Europe diretamente. Consequentemente, se quiseres mudar a tua antena ou tiveres qualquer problema durante o processo de inscrição no site oficial, terás de contactar &quot;myAEGEE Team&quot; (myaegee@aegee.org).</p>"
                  +"<p>Estamos ansiosos para te conhecer!</p>"



    }

    // Render the view
    view.render('torna-te-membro');

};
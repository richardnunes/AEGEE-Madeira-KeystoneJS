var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'su-faq';

    locals.info = {
        title: "Perguntas Frequentes",
        faq_grupo: [
            {
                q: "How to apply for a Summer University (SU)?",
                a: "<ul><li>Become member of your nearest AEGEE local</li>" +
                    "<li>Get an AEGEE.org account</li> " +
                    "<li>Choouse up to three SUs</li>" +
                    "<li>Submit your application including a motivation letter in which you explain who you are, why you want to participate in the SU you chose, etc. Attention: the selection is mainly based on the letter, so be specific and do a good self-PR!</li></ul>"
            },
            {
                q: "When to apply?",
                a: "The application system will be open from the 1st of March till the 25th of April, but your local may have an earlier deadline. Take into consideration that your application has to be approved by your home local in order to be valid."
            },
            {
                q: "Can I go with a friend to the same SU?",
                a: "The application process is individual, therefore there is no guarantee that something like this happens, although you can try. If you go on a SU, going to a different country, you learn new things, get to know another culture, another country and people, it is an adventure that you have to discover yourself!"
            },
            {
                q: "How much is the fee and what does it include?",
                a: "The application fee is € 2,50. This fee is charged to your local for each application, it's up to your local if you have to pay it or if it's included in your membership fee. Apart from the application fee there's the fee for the SU itself and this one depends on the SU type: Language Course (LC) and Summer Course (SC): € 77 per week. Travelling Summer University (TSU) and Language Course Plus (LC+) € 98 per week. The fees include: lodging, breakfast and at least one warm meal per day, tuition and social programme. In some SUs you may be asked for an extra fee for excursions or other activities. This additional fee is optional and you are not obliged to pay it! The obligatory fee, the optional fee and the way of payment are described in the SU booklet."
            },
            {
                q: "How is the lodging?",
                a: "The way of lodging as well as the needed equipment is described in the SU booklet. It can vary from SU to SU: student dormitories, youth hostels, tents, gym. Remember: the price you will be charged is quite low and organisers will have to fundraise a lot more than only fee you paid."
            },
            {
                q: "What about the quality?",
                a: "The quality of our SUs is controlled by the Summer University Coordination Team. We can observe that the general quality is raising from year to year. But do not forget that AEGEE is not a travel agency and that the SU organisers are not professionals, but students who are not paid for their work and who invest their leisure time to make this great experience possible for you! Mistakes can happen, but the organisers will always do their best to make your stay unforgettable! Remember: the group makes the spirit and it is up to you how your personal outcome of the SU looks like!"
            },
            {
                q: "The selection procedure – or what's happening next with my application?",
                a: "After having sent your application, there are several steps:" +
                    "<ul><li>It will be approved by your home local and will be sent to the Summer University Coordination Team (SUCT).</li>" +
                    "<li>The SUCT runs the pre-selection and you're preselected for one of the (up to 3) choices you made in your application.</li>" +
                    "<li>The whole pre-selection is done completely automatically, changes afterwards are impossible! We can also not make sure that you will be pre-selected in the same SU as your friend e.g., as the process is meant to provide the organisers with enough applications that are well balanced in matters of nationality (country), age and gender.</li>" +
                    "<li>Your pre-selected choice will be forwarded to the organisers who then do the final selection. The selection is completely up to the local but often this is done following some criteria, e.g. balance of genders, nationality, age, motivation letter. After this, the local publishes a selection list and informs all the people who applied for their event.</li></ul>"
            },
            {
                q: "What does it mean being on the waiting-list for a Summer University?",
                a: "Being on a waiting-list does not mean that you cannot go to a SU. After a certain deadline set by the organising local, people from the waiting-list may be accepted due to cancellations or due to even missing confirmations of the selected persons. The locals are obliged to inform you but it could help if you got in contact with the organisers to ask for your chances to be still accepted. You may also ask them to remove your from the list so that you can answer to open calls of SU with vacant places."
            },
            {
                q: "How to know of possible free places in other Summer Universities?",
                a: "In the application form you will be asked if a) you want to know about free places and if yes, b) getting the info on a mailing-list. We will subscribe all people who want that to a mailing-list where we'll post open calls with the SU and their vacant places. The further, last-minute-offers may be posted to the public mailing list AEGEE-SU-L and website. Only people that have applied for a SU in the official application period will have the opportunity to apply for an open call."
            },
            {
                q: "Visas or passports needed?",
                a: "To travel to certain countries, you may need your passport and sometimes even a visa. Getting a passport can be time-consuming, and a visa even more - up to 2 months in the worst case. Consequently, when applying pay particular attention to the starting date of the SU you choose! And do remember, that you will get to know only in May if you are selected for the SU in question! Generally, most of the AEGEE locals are experienced in the visa-getting process as visas are a part of the AEGEE spirit and also an everyday life problem for its members. We even have a working group willing to help you: the Visa Freedom Fighters! In any case, the visa-process will need a good communication and collaboration also from your side!"
            },
            {
                q: "How can be organized an SU to just over 150 € per person?",
                a: "Because each local organizer request grants from universities and public administrations and private companies to obtain low-priced accommodation, cheap meals in restaurants, in kind sponsorships, etc. It is a great and non profit volunteer work that is done by the organizers! In short: to organize any event, AEGEE has three funding sources: annual fees, dues of the specific event (in this case about 150 euros), and grants and sponsorships (of both public institutions and private companies). That is why you're paying less than it would normally cost you."
            },
            {
                q: "How can I get in touch with the organizers of a SU?",
                a: "Once you are looking at the description of the SUs, on the left side there is a section that says 'EMail'. This is the official email through which you can contact the organization of the SU."
            },
            {
                q: "Do I have to travel on my own to the SU?",
                a: "Yes, you have to travel on your own as far as getting to the starting point of the SU." +
                    "<p>A tip: if you are looking at tickets and you see the ticket one day before or the day after the SU starts is cheaper, than maybe it's fine to buy it, just get into contact with the organizers and they maybe can arrange everything for you to arrive a bit earlier/later. Also, when the list of selected participants is published you may want to contact others to go together if you live close to each other... Once you and the other participants are selected for a SU, the organizers usually create a mailing list or forum where you can communicate with all the participants and organizers. The organizers will send you information on how to pay the fee of the event, how to get there, etc... You must check your email regularly.</p>"
            },
            {
                q: "Is there a sample letter of motivation?",
                a: "No, that's what you have to do."
            },
            {
                q: "Do I have any obligation regarding AEGEE?",
                a: "No, AEGEE is a voluntary association. The only requirement is to pay the annual fee. Of course, you're warmly welcome to become an active member in your AEGEE local or on European level."
            },
            {
                q: "Do I need to learn English if I want to go away?",
                a: "English is the official language of AEGEE (together with French). If you don't have a very basic knowledge of English you may find it very difficult to communicate wherever you go. However, you will discover that not everyone has a high level of English, and that you may know more English than you think! And if you want to practice or improve your English... you're in the right place!"
            },
            {
                q: "Are provided special food requeriments?",
                a: "Yes. Vegetarian, non-pork food as well as other special menus are provided."
            },
            {
                q: "Who makes money with this Project?",
                a: "NOBODY. The partners of all AEGEE locals are not doing this out of economic interest. For us (active AEGEE members), meeting new people, travel for little money, learn languages, cultures, lifestyles and different mindsets is sufficient payment for the effort we make."
            },
            {
                q: "You don't know if your destination is safe?",
                a: "You can find <a href='http://ec.europa.eu/consularprotection/showMap.action?tab=4' target='_blank'>travel advice by country here</a>. And if you are an EU citizen travelling outside the EU, you can find information about <a href='http://ec.europa.eu/consularprotection/index.action' target='_blank'>consular protection here</a>."
            }
        ],
        contact: "If after all this you still have any questions, contact us!"

        //FAQ das SUs
    };

    // Render the view
    view.render('su-faq');

};
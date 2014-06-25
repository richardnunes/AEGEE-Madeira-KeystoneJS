var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var locals = res.locals,
        view = new keystone.View(req, res);

    // Set locals
    locals.section = 'tudo-sobre-su';

    locals.info = {
        brevemente: "Brevemente.",
        title: "Tudo sobre as Summer Universities (SUs)",
        about_su: [
            {
                q: "What is a SU ?",
                a: "The Summer University is an event that takes place during summer between one and four weeks in most of the cities that AEGEE is present. Understanding and exploring the multicultural dimension of the European continent, removing national borders, fighting for tolerance and creating open-minded citizens are some of the reasons why 20 to 50 young Europeans from all over Europe come together in each Summer University to taste the diversity of multiculturalism." +
                    "<p>The Summer University Project was born in 1988 with the intention to promote the European Integration. This project is the main tool of AEGEE to attain this difficult but fascinating target. Since that time, it has been continuing every year with the participation of more than 120 antennae.</p>" +
                    "<p>The activities carried out during a Summer University range from academic, such as classes to learn a foreign language, different courses on technical themes to multicultural activities: get familiar with Finnish culture, Spanish history, Greek mythology; learn how to sail, attend a photography course in Turkey or do hike in Polish woods, etc. Moreover, each Summer University follows a concrete theme throughout its duration that can be related to European Integration, International Politics, Active Citizenship, Education, Culture, Peace, Personal Development and many more.</p>" +
                    "<p>In a Summer University you will be given the chance to taste different food, to listen to different music, to dance with that music and at the end love it, to be good friends with people from different countries and then arranging trips together, you will learn to say &quot;hi&quot; in another 20 languages, you will feel free, you will love, you will experience, you will learn new things, you will do things you hadn't imagined… You will feel the AEGEE spirit, you will feel what is a SU!</p>"
            },
            {
                q: "Types",
                a: "<strong>Summer Course (SC)</strong><p>The Summer Course is a course about a specific topic ranging from language and local culture to environment and politics. It has a duration of two to four weeks. Participants receive at least 14 hours of tuition per week. The fee of 11 Euros/night includes tuition, lodging, two meals per day (of which one is warm) and a social program.</p>" +
                    "<strong>Summer Course Plus (SC+)</strong><p>The Summer Course Plus is mostly the same as the previous one with the great difference that during its duration of two to four weeks, participants receive at least 20 hours of intensive tuition per week by professionals on the topic. The fee of 14 Euros/night includes tuition, lodging, two meals per day (of which one is warm) and a social programme.</p>" +
                    "<strong>Travelling Summer University (TSU)</strong><p>The Travelling Summer University is organized by two or more locals. During the 2-4 weeks of cultural trip through a part of Europe, the group stays in at least 4 different places. The aim of this event is to combine the different lifestyles and cultures of the places visited with acourse provided like in Summer Course. Since there is a lot of time spent in travelling, the tuition hours are less than Summer Course, but at least 10 hours per week. The fee of 14 Euros/night includes lodging, two meals per day (of which one is warm), travel costs from the first to the last place mentioned in the programme, and a social programme.</p>"
            },
            {
                q: "Duration & Dates",
                a: "From one to three weeks. The usual duration is two weeks. All SUs are held between June and September."
            },
            {
                q: "Price",
                a: "The prices per week are:<ul><li>SC: 77€</li><li>SC+ and TSU: 98€</li></ul>If the SU lasts longer, or less, the price varies according to the week price." +
                    "<p></p> <p>The method of payment depends on the SU. You may have to pay 50% in advance and 50% upon arrival, 100% in advance, 100% on arrival...</p> " +
                    "<p>See &quot;Payment&quot; on the left of each description of a SU to find out how payment should be done for that particular SU.</p>" +
                    "<p></p><p></p>" +
                     "<strong>What's included in the price?</strong><ul>" +
                    "<li>Accommodation during the whole event.</li>" +
                    "<li>Meals: Two per day of which at least one is warm. Vegetarian, non-pork food and other special requeriments will be provided.</li>" +
                    "<li>Transportation during the event, tickets to recreational sites, cultural landmarks, activities, museums ... and everything else included in the program. And of course the parties!</li></ul>" +
                    "<strong>What is not included in the price?</strong>" +
                    "<ul><li>Transportation (plane, train ...) to where you are going to participate in a SU.</li>" +
                    "<li>Activities not included in the program. Some SU can offer a unique activity for an extra fee (for example, entry to a water park), which is optional anyway.</li></ul>"
            },
            {
                q: "Accommodation",
                a: "It depends on the SU. It may be a hostel, camping, tent, gym, houses of AEGEE members, student flats,... In any case, if you want to know more details about the accommodation, read the &quot;lodging&quot; specification in each SU description and if you still have doubts, contact the organizers of the specific SU."
            },
            {
                q: "Cooperation",
                a: "If your SU has a cooperation with a Working Group or Project, you are given the chance to learn more about specific topics and through interactive workshops or games, gain more knowledge on a specific content. Lastly, all Summer Universities this year have a theme throughout all the event."
            },
            {
                q: "Things to bring",
                a: "It depends on the SU. There is a specification of &quot;special equipment&quot; in each SU description. For example, if you sleep in a gym, you have to bring sleeping bag and an (air)mattress. If you go to the beach, bring a swimming suit. If you go to the mountains, you'll need warm clothes, etc." +
                "<p>During basicly all Summer Universities it is tradition to organize an evening called &quot;European Night&quot;, in which each participant prepares typical dishes from their country, or brings a traditional drink from home. Depending on the SU, they will tell you if you can cook there, or if you should just take some non perishable food or drinks.</p>"
            },
            {
                q: "Language",
                a: "English and French are the official languages of AEGEE. You will be able to discover that you know more English than you think because you'll be 24 hours a day with about 30 people from across Europe, which necessarily have to communicate in English! It is also a great way to practice your various other languages with native speakers."
            },
            {
                q: "Schedule",
                a: "Each SU has a different program. Usually every local has a website specifically appointed for their SU where they share lots of details about the program. If a SU has a website, it appears in the left bar in the SU description page."
            },
            {
                q: "Participants",
                a: "The minimum number of participants is 12 and maximum 50. The average is 25 places." +
                    "<p>The participants come from any of the other AEGEE locals who are scattered across Europe. Normally participants don't know each other before coming to the SU, so everyone will be eager to make friends with others. What characterizes AEGEE is that people are very open and there is no prejudice about people and where they are coming from.</p>"
            },
            {
                q: "Organization",
                a: "The SUs are organized by students like you, voluntarily (AEGEE is a non-profit association) and it has nothing to do with a travel agency. You will become friend of the organizers, because they're like you; you'll have fun with them during the day, they will show you their city, sleep in your same accommodation, and go out partying with you..." +
                    "<p>If you want to enjoy a sun and beach holidays in a luxury resort, this is not for you. If you want an unforgettable holiday with other young europeans like you in, this is what you've been looking for!</p>"
            },
            {
                q: "Motivation letter & customized questions",
                a: "You have to make one for each SU you choose (in the application process you will have to choose up to three, in order of preference). In the letter you have to introduce yourself and explain why you want to participate in the Summer University. You have to write it in English, unless you know the language of the country that you want to go to, in which case you can write in that language." +
                    "<p>The letter is the means by which the organizers, once shortlisted, accept you as a participant or not, so be original! Remember that the people that will read the letter will be someone like you, so show yourself in a positive and informal way. To start the letter with &quot;Dear Sir Organizer&quot; would therefore make no sense.</p>" +
                    "<p>Further more, you can guess that a three-line letter is a sure rejection, and two pages are as well. If you are afraid your English isn't good enough then remember, whoever reads your letter may know even less English than you. So, just write a letter of at least 500 characters to show that you are the ideal participant!</p>" +
                    "<p>Apart from the motivation letters, each SU organiser can ask you some concrete questions about their SU. You will find that questions in the Application form. This is to avoid participants that don't read the descriptions of the SUs.</p>"
            },
            {
                q: "Frequently Asked Questions (FAQ)",
                a: "<a href='/su-faq'>Click here</a> to find a comprehensive FAQ list to solve all your doubts."
            },
            {
                q: "Summer University Coordination Team (SUCT)",
                a: "The Summer University Project is centrally coordinated by the Summer University Coordination Team. The SUCT is a team of four AEGEE-members from different parts of Europe plus one appointed Comité Directeur member. These elected team members have different tasks:" +
                    "<p>Project Manager, Public Relations Responsible, Publications Responsible and Information Technology Responsible. After their election in autumn AGORA (AEGEE General Assembly), the SUCT is responsible for the good functioning and development of the project during one year.</p>" +
                    "<p>We are dealing with Summer University organizers by providing them with advice on how to organise a successful Summer University. We inform future Summer University participants about the application procedure or the general concept of AEGEE Summer Universities.</p>" +
                    "<p>The SUCT has a lot of different tasks throughout the year – from approving Summer Universities descriptions submitted by AEGEE locals to publishing PR material and printing the booklet that includes information about all Summer Universities.</p>" +
                    "<p>Moreover, SUCT is organising every year a training for future Summer University organisers, the Summer University Project School (SUPS). It is done in cooperation with the Academy (the AEGEE Human Resources Working Group).</p>" +
                    "<p>But the project is not over yet! After all the events take place, we take care of collecting the evaluations submitted by the participants after they come back from the Summer Universities they attended. In this way, we check the quality of the events.</p>" +
                    "<ul><li><strong>Project Manager: </strong>Francesca Russo (AEGEE-Padova)</li></ul>" +
                    "<ul><li><strong>Public Relations responsible: </strong>Anna Smailikova (AEGEE-Kyïv)</li></ul>" +
                    "<ul><li><strong>Publications responsible: </strong>Gerardo García Díaz (AEGEE-Oviedo)</li></ul>" +
                    "<ul><li><strong>IT responsible: </strong>Andrea Nostro (AEGEE-Reggio Calabria)</li></ul>" +
                    "<ul><li><strong>IT assistant: </strong>Costas Deltouzos (AEGEE-Patra)</li></ul>" +
                    "<ul><li><strong>Appointed CD member: </strong>Kathrin Renner (AEGEE-Passau)</li></ul>"
            }
        ]
        //Sobre as SUs
    };

    // Render the view
    view.render('tudo-sobre-su');

};
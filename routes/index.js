/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {

    // Views
    app.get('/', routes.views.noticias);
    app.get('/noticias/:category?', routes.views.noticias);
    app.get('/noticias/post/:post', routes.views.post);

    app.get('/sobre', routes.views.sobre);
    app.get('/mapa-rede', routes.views.mapa_rede);
    app.get('/declaracao-principios', routes.views.declaracao_principios);
    app.get('/direccao', routes.views.direccao);

    app.get('/projetos', routes.views.projetos);
    app.get('/grupos-de-trabalho', routes.views.grupos_de_trabalho);
    app.get('/summer-university', routes.views.summer_university);

    app.get('/tudo-sobre-su', routes.views.tudo_sobre_su);
    app.get('/su-faq', routes.views.su_faq);

    app.get('/torna-te-membro', routes.views.torna_te_membro);


    app.get('/gallery', routes.views.gallery);
    app.all('/contact', routes.views.contact);
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};

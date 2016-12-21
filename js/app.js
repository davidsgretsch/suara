var app = angular.module('suaraApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider

	.state('home', {
		url: "/",
		templateUrl: "views/home.html",
		controller: "mainController"
	})
	.state('nosotros', {
		url: "/nosotros",
		templateUrl: "views/nosotros.html",
		controller: "nosotrosController"
	})
	.state('destinos', {
		url: "/destinos",
		templateUrl: "views/destinos.html",
		controller: "destinosController"
	})
	.state('luna-de-miel', {
		url: "/luna-de-miel",
		templateUrl: "views/luna-de-miel.html"
	})
	.state('formas-de-pago', {
		url: "/formas-de-pago",
		templateUrl: "views/formas-de-pago.html"
	})
	.state('america', {
		url: "/destinos/america",
		templateUrl: "views/destinos/america.html",
		controller: "americaController"
	})
	.state('brasil', {
		url: "/destinos/brasil",
		templateUrl: "views/destinos/brasil.html",
		controller: "brasilController"
	})
	.state('caribe', {
		url: "/destinos/caribe",
		templateUrl: "views/destinos/caribe.html",
		controller: "caribeController"
	})
	.state('europa', {
		url: "/destinos/europa",
		templateUrl: "views/destinos/europa.html",
		controller: "europaController"
	})
	.state('peru', {
		url: "/destinos/peru",
		templateUrl: "views/destinos/peru.html",
		controller: "peruController"
	})

	$urlRouterProvider.otherwise('/');
});
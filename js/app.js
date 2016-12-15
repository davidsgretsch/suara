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


	$urlRouterProvider.otherwise('/');
});
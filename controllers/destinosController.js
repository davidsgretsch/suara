app.controller('destinosController', function ($scope){
	
	$scope.title = "Destinos";
	
	$scope.cities = [
		{name: 'Maimi', country: 'america', img: 'images/destinos1.jpg'},
		{name: 'Brasil', country: 'brasil', img: 'images/destinos4.jpg'},
		{name: 'Caribe', country: 'caribe', img: 'images/destinos5.jpg'},
		{name: 'Europa', country: 'europa', img: 'images/destinos8.jpg'},
		{name: 'Mexico', country: 'mexico', img: 'images/destinos11.jpg'},
		{name: 'Perú', country: 'peru', img: 'images/destinos12.jpg'}
	];
	
});
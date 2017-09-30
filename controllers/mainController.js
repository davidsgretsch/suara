app.controller('mainController', function ($scope){

 	$('.parallax').parallax();
	$('.slider').slider({full_width: true, height: 463});

    $scope.closeSideMain = function(){
    	$(document).sideNav('hide');
    };

    $scope.init = function(){
    	forEachSection();
    };

    var forEachSection = function(){
    }
  
});
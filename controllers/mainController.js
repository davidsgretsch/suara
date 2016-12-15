app.controller('mainController', function ($scope){

	$(document).ready(function(){
      $('.parallax').parallax();
      $('.slider').slider({full_width: true, height: 463});
    });

    $scope.closeSideMain = function(){

    	$(document).sideNav('hide');
    };
        
});
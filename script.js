var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,myService){
	myService.getData().then(function(response){
		$scope.details = response.data;
		console.log($scope.details)
	})
})
var app = angular.module('myApp1',[]);
app.controller('myCtrl1',function($scope,myService){
	myService.getData().then(function(response){
		$scope.details1 = response.data;
		console.log($scope.details1)
	})
})
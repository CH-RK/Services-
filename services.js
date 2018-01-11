app.factory('myService',function($http){
	var serObj = {};
	serObj.getData = function(){
		 return $http.get("https://jsonplaceholder.typicode.com/posts");
	}

	return serObj;

})
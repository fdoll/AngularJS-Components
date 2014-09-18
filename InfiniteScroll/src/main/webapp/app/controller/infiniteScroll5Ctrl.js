infiniteScrollApp.controller('infScroll5Ctrl', function($scope, $http) {
	$scope.movies = [];
	$scope.images = [];
	var imagen = "";
	var carpeta = "../../"
    
  $http.get('http://localhost:3000/movies/id/1').success(function(data){
	  $scope.movies.push(data.title, data.description);
	  imagen= carpeta.concat(data.image);
	  $scope.images.push(data.image);
	  console.log(imagen);
	  console.log($scope.movies);
 });

  var id = 2;
  $scope.loadMore = function() {
    $http.get('http://localhost:3000/movies/id/' + id).success(function(data){
    	$scope.movies.push(data.title, data.description);
    	imagen= carpeta.concat(data.image);
    	$scope.images.push(data.image);
    	console.log(imagen);
    	console.log($scope.movies);
    });
    
    id=(id%10)+1;
  };
});
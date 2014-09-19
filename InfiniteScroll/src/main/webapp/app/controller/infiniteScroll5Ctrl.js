infiniteScrollApp.controller('infScroll5Ctrl', function($scope, $http) {
	$scope.movies = [];
    
  $http.get('http://localhost:3000/movies/id/1').success(function(data){
	  $scope.movies.push({title: data.title, desc: data.description, image: data.image});
	  console.log($scope.movies);
 });

  var id = 2;
  $scope.loadMore = function() {
    $http.get('http://localhost:3000/movies/id/' + id).success(function(data){

  	  $scope.movies.push({title: data.title, desc: data.description, image: data.image});
    	console.log($scope.movies);
    });
    
    id=(id%10)+1;
  };
});
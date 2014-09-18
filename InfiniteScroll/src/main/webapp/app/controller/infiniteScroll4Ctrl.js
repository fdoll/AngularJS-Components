infiniteScrollApp.controller('infScroll4Ctrl', function($scope) {
	
  $scope.data = ['Cuadradito 1', 'Cuadradito 2', 'Cuadradito 3'];
  $scope.loadNew = function() {
	  for (var i = 0; i < 5; i++) {
          $scope.data.push('Cuadradito ' + ($scope.data.length + 1));
	  }
  };
});
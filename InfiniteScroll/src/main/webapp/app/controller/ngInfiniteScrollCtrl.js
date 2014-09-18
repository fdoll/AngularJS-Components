infiniteScrollApp.controller('infScrollCtrl2', function($scope) {
  $scope.images = [1, 2, 3];

  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 5; i++) {
      $scope.images.push(last + i);
    }
  };
});
infiniteScrollApp.controller('infScrollCtrl', function ($scope, $http) {
	
   $scope.items = [];
   $scope.loadMore = function() {
     $http.get('https://upload.wikimedia.org/wikipedia/commons/a/ad/Europe_geological_map-en.jpg').success(function(items) {
       useItems(items);
       $scope.$broadcast('scroll.infiniteScrollComplete');
     });
   };

   $scope.$on('stateChangeSuccess', function() {
     $scope.loadMore();
   });
 });
var infiniteScrollApp = angular.module('infiniteScrollApp', ['ngRoute', 'ionInfiniteScroll', 'infinite-scroll','lrInfiniteScroll', 'scroll-infinite', 'infScroll5', 'ionScroll', 'ui.bootstrap']);

infiniteScrollApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/' , {	
			templateUrl: 'app/views/infiniteScroll.html'
		}).
		when('/infscroll2' , {	
			templateUrl: 'app/views/ngInfiniteScroll.html'
		}).
		when('/infscroll3' , {	
			templateUrl: 'app/views/infinite-scroll.html'
		}).
		when('/infscroll4' , {	
			templateUrl: 'app/views/infiniteScroll4.html'
		}).
		when('/infscroll5' , {	
			templateUrl: 'app/views/infiniteScroll5.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	
}]);

function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}


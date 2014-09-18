angular.module('infiniteScroll2', [])
.directive('infiniteScroll2', ["$window", "$q", function($window, $q) {
  return {
    link: function(scope, element, attrs) {
      var offset, scrolling;
      offset = parseInt(attrs.offset, 10) || 0;
      scrolling = false;
      angular.element($window).bind('scroll', function() {
        var deferred, ref;
        if (!scrolling && ((ref = element[0].offsetParent) != null ? ref.offsetTop : void 0) + parseInt(element[0].style.height, 10) < $window.scrollY + $window.innerHeight - offset) {
          scrolling = true;
          deferred = $q.defer();
          scope[attrs.infiniteScroll](deferred);
          return deferred.promise.then(function() {
            return scrolling = false;
          });
        }
      });
    }
  };
}]);
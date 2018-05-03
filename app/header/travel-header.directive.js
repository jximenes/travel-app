(function(){
    "use strict";

    angular
        .module("travelApp")
        .directive("travelHeader", ["$window", function($window){
            /**
             * directive for header
             * apply the behaviour to fix the header on top when scroll down
             */
            var directive = {
                restrict: "A",
                scope:{
                },
                templateUrl : "app/header/travel-header.template.html",
                link: function(scope, element, attrs){
                    var offsetTop = element[0].offsetTop;
                    var $w = angular.element($window);
                    $w.on('scroll', function (e) {
                        if ($w[0].pageYOffset >= offsetTop) {
                          element.addClass('travel-header-fix');
                        } else {
                          element.removeClass('travel-header-fix');
                        }
                      });
                }
            };
            return directive;
        }]);
})();
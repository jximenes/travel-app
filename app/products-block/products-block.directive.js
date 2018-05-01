(function(){
    "use strict";

    angular
        .module("travelApp")
        .directive("productsBlock", [function(){
            var directive = {
                restrict: "A",
                scope:{
                    info: "=",
                    layout: "="
                },
                templateUrl : "app/products-block/products-block.template.html",
                controller: ["$scope", function($scope){
                    $scope.layout = $scope.layout || "grid";
                    $scope.switch = function(){
                        $scope.layout = $scope.layout == "grid" ? "list" : "grid";
                    }
                }],
                link: function(scope, element, attrs){
                    
                }
            };
            return directive;
        }])
})();
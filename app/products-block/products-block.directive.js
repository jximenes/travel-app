(function(){
    "use strict";

    angular
        .module("travelApp")
        .directive("productsBlock", [function(){
            var directive = {
                restrict: "A",
                scope:{
                    info: "=",
                    name: "="
                },
                templateUrl : "app/products-block/products-block.template.html",
                controller: ["$scope", function($scope){
                }],
                link: function(scope, element, attrs){
                    
                }
            };
            return directive;
        }])
})();
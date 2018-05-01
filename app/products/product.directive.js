(function(){
    "use strict";

    angular
        .module("travelApp")
        .directive("product", [function(){
            var directive = {
                restrict: "A",
                scope:{
                    product: "="
                },
                templateUrl : "app/products/product.template.html",
                controller: function(){

                },
                link: function(scope, element, attrs){
                    
                }
            };
            return directive;
        }]);
})();
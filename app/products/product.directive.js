(function(){
    "use strict";

    angular
        .module("travelApp")
        .directive("product", [function(){
            /**
             * product directive builds a product layout based on products.template.html
             * receives the product data as parameter
             */
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
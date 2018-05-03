(function(){
    "use strict";

    angular
        .module("travelApp")
        .directive("productsBlock", [function(){
            /**
             * productsBlock directive allows to show a list of products based on products-block.template.html
             * this directive receives 2 parameters:
             * info - object with the product name and the products array
             * layout - the type of layout (grid or list)
             */
            var directive = {
                restrict: "A",
                scope:{
                    info: "=",
                    layout: "="
                },
                templateUrl : "app/products-block/products-block.template.html",
                controller: ["$scope", function($scope){
                    $scope.layout = $scope.layout || "grid";
                    /**
                     * this function is used to switch between grid and list layouts
                     */
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
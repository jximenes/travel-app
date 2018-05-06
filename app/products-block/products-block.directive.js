(function(){
    "use strict";

    angular
        .module("travelApp")
        .directive("productsBlock", ["$window", function($window){
            var smallViewportSizeUp = 900; // for viewports bigger than 900px layout is list
            /**
             * productsBlock directive allows to show a list of products based on products-block.template.html
             * this directive receives as parameter:
             * info - object with the product name and the products array
             * layout - layout type (grid/list/default). if default then for small viewports layout is grid, and for big viewports layout is list
             */
            var directive = {
                restrict: "A",
                scope:{
                    info: "=",
                    defaultLayout: "="
                },
                templateUrl : "app/products-block/products-block.template.html",
                controller: ["$scope", function($scope){
                    
                    //calculate viewport width to apply correct layout
                    if($scope.defaultLayout == "default"){
                        var $w = angular.element($window);
                        if($w[0].innerWidth < smallViewportSizeUp){
                            $scope.layout = "grid";
                        }
                        else{
                            $scope.layout = "list";
                        }
                    }
                    else{
                        $scope.layout = $scope.defaultLayout || "grid";
                    }

                    /**
                     * this function is used to switch between grid and list layouts
                     */
                    $scope.switch = function(){
                        $scope.layout = $scope.layout == "grid" ? "list" : "grid";
                    }
                }]
            };
            return directive;
        }])
})();
(function(){
    angular
        .module("travelApp", [])
        .controller("travelController", ["travelService", "$scope", function(travelService, $scope){
            $scope.blocks = travelService.getData();
        }]);
})();
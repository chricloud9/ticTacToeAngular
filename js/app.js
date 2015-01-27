var instructorApp = angular.module("instructorApp", []);

instructorApp.controller("InstructorsController", function($scope){

    $scope.bits = [true, false, false, true, true, false, false, true];

    $scope.val = 0;

    $scope.bitToggle = function(bit) {
        $scope.val = (($scope.val & bit) > 0) ?        // Is this bit set yet?
         ($scope.val - bit)                // It is, so clear it
          :
         ($scope.val + bit);            // It is not, so set it
    }

    $scope.bitTest = function(b, v){
        return ((v & b) > 0);
    };

});    // End of the controller
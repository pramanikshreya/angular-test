(function (){ //IFFE Immediately Invoked Fucntion Expression

'use strict'; //No local variables bleed into the global scope

angular.module('LunchCheck', []) //Angular Module with no ependencies
.controller ('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {

  $scope. check = function () {

    if(typeof $scope.lunch != 'undefined' && $scope.lunch!="") {
      $scope.spltstr = $scope.lunch.split(',');
      console.log($scope.spltstr);
      console.log($scope.spltstr.length);
      if ($scope.spltstr.length <= 3 && $scope.spltstr.length >0) {
        $scope.message = "Enjoy!";
        $scope.success = true;
      }
      else if ($scope.spltstr.length > 3) {
        $scope.message = "Too much!";
        $scope.success = true;
      }
    }
    else {
      $scope.message = "Please enter data first";
      $scope.success = false;
    }


  }
};


})();

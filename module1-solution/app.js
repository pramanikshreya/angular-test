(function (){ //IFFE Immediately Invoked Fucntion Expression

'use strict'; //No local variables bleed into the global scope

angular.module('LunchCheck', []) //Angular Module with no ependencies
.controller ('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {

  $scope. check = function () {

    if(typeof $scope.lunch != 'undefined' && $scope.lunch!="") {
      $scope.spltstr = $scope.lunch.split(',');
      $scope.length = $scope.spltstr.length;
    }

   console.log($scope.spltstr);
   console.log($scope.length);

    if ($scope.length <= 3 && $scope.length >0)
      $scope.message = "Enjoy!"
    else if ($scope.length > 3)
      $scope.message = "Too much!"
    else
      $scope.message = "Please enter data first"



  }
};


})();

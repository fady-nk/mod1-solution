(function() {
    'use strict';
  
    angular.module('answer1', [])
  
    .controller('MyFirstController', function ($scope) {
      $scope.name = "list comma separated dishes you usually have for lunch";
      $scope.output=function(){
        var str=$scope.name;
        var arr=str.split(",");
        var len=arr.length;
        if(str=="" || str==" "){
          $scope.out="Please enter data first";
        }
        else if(len<=3)
        {
         $scope.out="Enjoy!";
        }
        else
        {
          $scope.out="Too much!";
        }
      };
    });  

  })();
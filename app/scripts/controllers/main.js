'use strict';

/**
 * @ngdoc function
 * @name mytodolistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodolistApp
 */
angular.module('mytodolistApp')
  .controller('MainCtrl', function ($scope) {
      $scope.todos = [];
      $scope.addTodo = function(){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };
      $scope.removeTodo = function(index){
          $scope.todos.splice(index, 1);
      };
  });

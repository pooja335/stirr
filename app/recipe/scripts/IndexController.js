angular
  .module('recipe')
  .controller("IndexController", function ($scope, Recipe, supersonic) {
    $scope.recipes = null;
    $scope.showSpinner = true;

    Recipe.all().whenChanged( function (recipes) {
        $scope.$apply( function () {
          $scope.recipes = recipes;
          $scope.showSpinner = false;
        });
    });
  });
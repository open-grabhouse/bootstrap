angular.module('ui.bootstrap.demo').controller('RatingDemoCtrl', function($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [{
    stateOn: 'fa-ok-sign',
    stateOff: 'fa-ok-circle'
  }, {
    stateOn: 'fa-star',
    stateOff: 'fa-star-empty'
  }, {
    stateOn: 'fa-heart',
    stateOff: 'fa-ban-circle'
  }, {
    stateOn: 'fa-heart'
  }, {
    stateOff: 'fa-off'
  }];
});

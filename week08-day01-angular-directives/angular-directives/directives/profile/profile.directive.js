angular
  .module('angularDirectives')
  .directive('profile', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/profile/profile.directive.html',
      scope: {
        person: '='
      }
    };
  });

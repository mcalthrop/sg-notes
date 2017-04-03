angular
  .module('angularDirectives')
  .directive('profile', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/profile/profile.directive.html',
      scope: {
        person: '='
      },
      link: function (scope/*, element, attrs */) {
        scope.showSkills = false;

        scope.toggleSkills = function () {
          scope.showSkills = !scope.showSkills;
        };
      }
    };
  });

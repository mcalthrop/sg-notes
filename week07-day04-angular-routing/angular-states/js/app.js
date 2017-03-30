function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../states/home.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);


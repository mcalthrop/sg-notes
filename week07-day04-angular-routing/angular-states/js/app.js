function mainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../states/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: '../states/about.html'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('angularstates', ['ui.router'])
  .config(mainRouter);


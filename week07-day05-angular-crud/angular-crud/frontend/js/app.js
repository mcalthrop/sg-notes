function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/ducks',
      templateUrl: '/states/home.html'
    });

  $urlRouterProvider.otherwise('/ducks');
}

angular
  .module('DuckApp', ['ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);

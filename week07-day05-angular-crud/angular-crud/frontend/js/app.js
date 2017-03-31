function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/ducks',
      templateUrl: '/states/home.html'
    })
    .state('show', {
      url: '/ducks/:duckId',
      templateUrl: '/states/show.html'
    });

  $urlRouterProvider.otherwise('/ducks');
}

angular
  .module('DuckApp', ['ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);

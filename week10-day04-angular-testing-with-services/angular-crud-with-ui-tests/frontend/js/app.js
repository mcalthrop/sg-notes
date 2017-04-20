function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/ducks',
      templateUrl: '/states/home.html'
    })
    .state('new', {
      url: '/ducks/new',
      templateUrl: '/states/new.html'
    })
    .state('show', {
      url: '/ducks/:duckId',
      templateUrl: '/states/show.html'
    })
    .state('edit', {
      url: '/ducks/:duckId/edit',
      templateUrl: '/states/edit.html'
    });

  $urlRouterProvider.otherwise('/ducks');
}

angular
  .module('DuckApp', ['ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter);

angular
  .module('DuckApp', ['ui.router'])
  .config(MainRouter)

function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/ducks',
      templateUrl: '/states/home.html'
    })

  $urlRouterProvider.otherwise('/ducks')

}
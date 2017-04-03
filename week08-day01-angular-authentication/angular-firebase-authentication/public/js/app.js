function MainRouter ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/states/signup.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/states/login.html'
    })
    .state('authRequired', {
      url: '/authrequired',
      templateUrl: '/states/authRequired.html'
    })
    .state('secret', {
      url: '/secret',
      templateUrl: '/states/secret.html'
    });
}

angular
  .module('myApp', ['ui.router', 'firebase'])
  .config(MainRouter);

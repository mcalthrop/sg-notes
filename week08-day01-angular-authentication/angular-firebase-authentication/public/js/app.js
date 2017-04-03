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
    .state('auth-required', {
      url: '/authrequired',
      templateUrl: '/states/auth-required.html'
    })
    .state('secret', {
      url: '/secret',
      templateUrl: '/states/secret.html',
      resolve: {
        currentAuth: [
          'AuthFactory',
          (AuthFactory) => {
            return AuthFactory.$requireSignIn();
          }
        ]
      }
    });
}
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function AuthCatcher($rootScope, $state) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('auth-required');
    }
  });
}
AuthCatcher.$inject = ['$rootScope', '$state'];

angular
  .module('myApp', ['ui.router', 'firebase'])
  .config(MainRouter)
  .run(AuthCatcher);

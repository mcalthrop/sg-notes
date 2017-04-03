/* global firebase */

function AuthRun() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDtkYkwgcy55k3u5F5fJW8tWsLW51xdoKc',
    authDomain: 'angularauth-909fd.firebaseapp.com',
    databaseURL: 'https://angularauth-909fd.firebaseio.com',
    projectId: 'angularauth-909fd',
    storageBucket: 'angularauth-909fd.appspot.com',
    messagingSenderId: '932084067823'
  };

  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth) {
  return $firebaseAuth();
}
AuthFactory.$inject = ['$firebaseAuth'];

angular
  .module('myApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);

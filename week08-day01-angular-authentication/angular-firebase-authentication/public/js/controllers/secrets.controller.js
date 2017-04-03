function SecretsController () {
  var controller = this;

  controller.secrets = [
    'This is a secret',
    'This is a secret',
    'This is a secret',
    'This is a secret',
    'This is a secret',
    'This is a secret',
    'This is a secret',
    'This is a secret',
    'This is a secret'
  ];
}

angular
  .module('myApp')
  .controller('SecretsController', SecretsController);

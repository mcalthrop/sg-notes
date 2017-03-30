function HomeController() {
  var controller = this;

  console.log('HomeController:', controller);

  function init() {
    controller.address = {
      street: '1 Strand',
      city: 'London',
      postCode: 'W1'
    };
  }

  init();
}

angular
  .module('angularstates')
  .controller('HomeController', HomeController);

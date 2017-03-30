function HomeController() {
  var controller = this;

  function init() {
    console.log('HomeController:', controller);
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

function DuckController($state, $stateParams, DuckFactory) {
  var controller = this;

  controller.getDuck = function () {
    var duckId = $stateParams.duckId;

    DuckFactory.getOne(duckId).then(
      function success(response) {
        controller.selectedDuck = response.data;
      },
      function error(error) {
        console.warn('Error getting duck:', error);
      }
    );
  };

  controller.addDuck = function () {
    console.log('addDuck()');
    DuckFactory.createOne(controller.newDuck).then(
      function success(response) {
        console.log('Created new duck:', response);
        $state.go('home');
      },
      function error(error) {
        console.warn('Error creating duck:', error);
      }
    );
  };

  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
    controller.newDuck = {};
    controller.colors = ['red', 'green', 'blue'];
    DuckFactory.getAll().then(
      function success(response) {
        controller.allDucks = response.data;
      },
      function error(error) {
        console.warn('Error getting ducks:', error);
      }
    );
  }

  init();
}

angular
  .module('DuckApp')
  .controller('DuckController', DuckController);

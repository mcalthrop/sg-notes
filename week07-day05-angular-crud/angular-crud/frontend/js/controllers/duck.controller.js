function DuckController($stateParams, DuckFactory) {
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

  function init() {
    console.log(controller);
    controller.selectedDuck = undefined;
    controller.allDucks = [];
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

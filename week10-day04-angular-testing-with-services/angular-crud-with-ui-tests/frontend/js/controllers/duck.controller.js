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

  controller.deleteDuck = function (duckId) {
    DuckFactory.deleteOne(duckId).then(
      function success(response) {
        console.log('duck deleted:', response);
      },
      function error(error) {
        console.warn('Error deleting duck:', error);
      }
    );
  };

  controller.editDuck = function (duckId) {
    $state.go('edit', { duckId: duckId });
  };

  controller.updateDuck = function () {
    DuckFactory.editOne(controller.selectedDuck.duck).then(
      function success(response) {
        console.log('duck updated:', response);
      },
      function error(error) {
        console.warn('Error updating duck:', error);
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

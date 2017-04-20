function DuckController($state, $stateParams, DuckFactory) {
  const controller = this;

  controller.getDuck = () => {
    const duckId = $stateParams.duckId;

    DuckFactory.getOne(duckId).then(
      (response) => {
        controller.selectedDuck = response.data;
      },
      (error) => {
        console.warn('Error getting duck:', error);
      }
    );
  };

  controller.addDuck = () => {
    DuckFactory.createOne(controller.newDuck).then(
      (response) => {
        console.log('Created new duck:', response);
        $state.go('home');
      },
      (error) => {
        console.warn('Error creating duck:', error);
      }
    );
  };

  controller.deleteDuck = (duckId) => {
    DuckFactory.deleteOne(duckId).then(
      (response) => {
        console.log('duck deleted:', response);
      },
      (error) => {
        console.warn('Error deleting duck:', error);
      }
    );
  };

  controller.editDuck = (duckId) => {
    $state.go('edit', { duckId });
  };

  controller.updateDuck = () => {
    DuckFactory.editOne(controller.selectedDuck.duck).then(
      (response) => {
        console.log('duck updated:', response);
      },
      (error) => {
        console.warn('Error updating duck:', error);
      }
    );
  };

  function init() {
    controller.selectedDuck = undefined;
    controller.allDucks = [];
    controller.newDuck = {};
    controller.colors = ['red', 'green', 'blue'];
    DuckFactory.getAll().then(
      (response) => {
        controller.allDucks = response.data;
      },
      (error) => {
        console.warn('Error getting ducks:', error);
      }
    );
  }

  init();
}
DuckController.$inject = ['$state', '$stateParams', 'DuckFactory'];

angular
  .module('DuckApp')
  .controller('DuckController', DuckController);

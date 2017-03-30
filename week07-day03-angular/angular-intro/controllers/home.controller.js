console.log('home.controller.js');

function HomeController() {
  var controller = this;
  var canShowGonzo = false;

  // Shows example of sending the click event to this handler –
  // see the markup, where the variable `$event` is passed to this method.
  controller.showGonzo = function(event) {
    console.log('showGonzo: event:', event);
    canShowGonzo = true;
  };

  controller.hideGonzo = function() {
    canShowGonzo = false;
  };

  controller.toggleGonzo = function () {
    canShowGonzo = !canShowGonzo;
  };

  controller.isGonzoVisible = function () {
    return canShowGonzo;
  };

  controller.getGonzoVisibilityClass = function () {
    var className = 'isVisible';

    if (!canShowGonzo) {
      className = 'isNotVisible';
    }

    return className;
  };

  controller.addTrainer = function () {
    console.log('addTrainer: controller.newTrainerName:', controller.newTrainerName);
    controller.trainers.push(controller.newTrainerName);
    controller.newTrainerName = '';
  };

  controller.clearTrainerList = function () {
    controller.trainers = [];
  };

  controller.canDisplayTrainerList = function () {
    return controller.trainers.length > 0;
  };

  function init() {
    console.log('inside HomeController');
    controller.newTrainerName = '';
    controller.title = 'Home page';
    controller.trainers = ['Steve', 'Matt', 'Ollie', 'Niall'];
    controller.hideGonzo();
  }

  init();
}

angular
  .module('myFirstApp', [])
  .controller('HomeController', HomeController);

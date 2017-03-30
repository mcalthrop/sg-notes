function AboutController() {
  var controller = this;

  function init() {
    console.log('AboutController:', controller);
  }

  init();
}

angular
  .module('angularstates')
  .controller('AboutController', AboutController);

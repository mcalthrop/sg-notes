describe('DuckController', () => {
  let controllerToTest;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller) => {
      controllerToTest = $controller('DuckController');
    });
  });

  describe('initialisation', () => {
    it('should do a basic test', () => {
      console.log('got inside basic test');
    });
  });

});

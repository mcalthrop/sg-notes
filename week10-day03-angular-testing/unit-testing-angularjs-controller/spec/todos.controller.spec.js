describe('TodosController', () => {
  let controllerToTest;

  beforeEach(() => {
    module('todosApp');
    inject(($controller) => {
      controllerToTest = $controller('TodosController');
    });
  });

  describe('initialisation', () => {
    it('should initialise list correctly', () => {
      expect(controllerToTest.list).toEqual([]);
    });
    it('should initialise inputText correctly', () => {
      expect(controllerToTest.inputText).toEqual('');
    });
  });
});

describe('TodosController', () => {
  let controllerToTest;
  let MockTodosFactory;

  beforeEach(() => {
    module('todosApp');
    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };
    inject(($controller) => {
      controllerToTest = $controller('TodosController', { TodosFactory: MockTodosFactory });
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

  describe('add()', () => {
    it('should call TodosFactory.add() with correct parameter', () => {
      const testInputText = 'new todo 1';

      controllerToTest.inputText = testInputText;
      controllerToTest.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(testInputText);
    });
    it('should clear inputText', () => {
      const testInputText = 'new todo 2';

      controllerToTest.inputText = testInputText;
      controllerToTest.add();
      expect(controllerToTest.inputText).toEqual('');
    });
  });
});

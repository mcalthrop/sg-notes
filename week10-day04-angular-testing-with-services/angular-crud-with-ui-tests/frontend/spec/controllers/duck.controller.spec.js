describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$state;
  let mock$stateParams;
  let testDuckId;
  let API_URL;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller, $httpBackend, _API_URL_) => {
      API_URL = _API_URL_;
      httpBackend = $httpBackend;
      mock$state = {
        go: jasmine.createSpy()
      };
      mock$stateParams = {
        duckId: testDuckId
      };
      controllerToTest = $controller('DuckController', {
        $stateParams: mock$stateParams,
        $state: mock$state
      });
    });
  });

  describe('initialisation', () => {
    it('should populate allDucks with correct data', () => {
      const testDucks = ['duck one', 'duck two'];

      httpBackend
        .expect('GET', `${API_URL}/ducks`)
        .respond(testDucks);
      httpBackend.flush();
      expect(controllerToTest.allDucks).toEqual(testDucks);
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

  describe('editDuck()', () => {
    it('should go to "edit" state with specified duckId', () => {
      const testDuckId = 'quark';

      controllerToTest.editDuck(testDuckId);
      expect(mock$state.go).toHaveBeenCalledWith('edit', { duckId: testDuckId });
    });
  });

});

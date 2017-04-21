describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$state;
  let mock$stateParams;
  let API_URL;
  const testDuckId = 'quirk';
  const testDucks = ['Donald', 'Daffy'];

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
      httpBackend
        .when('GET', `${API_URL}/ducks`)
        .respond(testDucks);
    });
  });

  describe('initialisation', () => {
    it('should populate allDucks with correct data', () => {
      httpBackend
        .expect('GET', `${API_URL}/ducks`);
      httpBackend.flush();
      expect(controllerToTest.allDucks).toEqual(testDucks);
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

  describe('editDuck()', () => {
    it('should go to "edit" state with specified duckId', () => {
      controllerToTest.editDuck(testDuckId);
      expect(mock$state.go).toHaveBeenCalledWith('edit', { duckId: testDuckId });
    });
  });

  describe('deleteDuck()', () => {
    it('should make API call to delete specified duck', () => {

      httpBackend
        .expect('DELETE', `${API_URL}/ducks/${testDuckId}`)
        .respond({});
      controllerToTest.deleteDuck(testDuckId);
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

});

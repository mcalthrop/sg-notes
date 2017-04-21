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

  describe('updateDuck()', () => {
    it('should make API call to update duck with correct data', () => {
      const testUpdatedDuck = {
        _id: testDuckId
      };

      httpBackend
        .expect('PATCH', `${API_URL}/ducks/${testDuckId}`, testUpdatedDuck)
        .respond({});
      controllerToTest.selectedDuck = {
        duck: testUpdatedDuck
      };
      controllerToTest.updateDuck();
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
  });

  describe('addDuck()', () => {
    it('should make API call to add duck with correct data', () => {
      const testDuckToAdd = {
        name: 'Daisy'
      };

      httpBackend
        .expect('POST', `${API_URL}/ducks`, testDuckToAdd)
        .respond({});
      controllerToTest.newDuck = testDuckToAdd;
      controllerToTest.addDuck();
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
    });
    it('should go to "home" state on success', () => {
      httpBackend
        .when('POST', `${API_URL}/ducks`)
        .respond({});
      controllerToTest.addDuck();
      httpBackend.flush();
      expect(mock$state.go).toHaveBeenCalledWith('home');
    });
  });

});

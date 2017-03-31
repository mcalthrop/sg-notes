function DuckFactory(API_URL, $http) {
  return {
    getAll: function () {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks`
      });
    },
    getOne: function (id) {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks/${id}`
      });
    },
    createOne: function (newDuck) {
      return $http({
        method: 'POST',
        url: `${API_URL}/ducks`,
        data: newDuck
      });
    }
  };
}

angular
  .module('DuckApp')
  .factory('DuckFactory', DuckFactory);

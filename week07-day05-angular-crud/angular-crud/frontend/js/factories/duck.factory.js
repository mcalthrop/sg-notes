function DuckFactory(API_URL, $http) {
  return {
    getAll: function () {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks`
      });
    }
  };
}

angular
  .module('DuckApp')
  .factory('DuckFactory', DuckFactory);

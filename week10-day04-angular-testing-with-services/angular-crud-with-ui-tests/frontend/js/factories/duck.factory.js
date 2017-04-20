function DuckFactory(API_URL, $http) {
  return {
    getAll() {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks`
      });
    },
    getOne(duckId) {
      return $http({
        method: 'GET',
        url: `${API_URL}/ducks/${duckId}`
      });
    },
    createOne(newDuck) {
      return $http({
        method: 'POST',
        url: `${API_URL}/ducks`,
        data: newDuck
      });
    },
    deleteOne(duckId) {
      return $http({
        method: 'DELETE',
        url: `${API_URL}/ducks/${duckId}`
      });
    },
    editOne(editedDuck) {
      return $http({
        method: 'PATCH',
        url: `${API_URL}/ducks/${editedDuck._id}`,
        data: editedDuck
      });
    }
  };
}

angular
  .module('DuckApp')
  .factory('DuckFactory', DuckFactory);

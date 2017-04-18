function TodosFactory() {
  const list = [];

  return {
    list,
    add: (item) => list.push(item),
    clear: () => list.splice(0)
  };
}

angular
  .module('sampleApp')
  .factory('TodosFactory', TodosFactory);

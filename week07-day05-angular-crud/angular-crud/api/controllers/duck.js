var Duck = require('../models/Duck');

// GET
function getAll(request, response) {
  Duck.find(function(error, criminals) {
    if (error) return response.json({message: 'Could not find any criminal'});
    response.json(criminals);
  }).select('-__v');
}

// POST
function createDuck(request, response) {
  var duck = new Duck(request.body);
  duck.save(function(error) {
    if (error) return response.json({messsage: 'Could not ceate duck b/c:' + error});
    response.json({duck: duck});
  });
}

// GET
function getDuck(request, response) {
  var id = request.params.id;
  Duck.findById({ _id: id }, function (error, duck) {
    if (error) return response.json({message: 'Could not find duck b/c:' + error});
    response.json({duck: duck});
  }).select('-__v');
}

//UPDATE

function updateDuck(request, response) {
  var id = request.params.id;

  Duck.findById({ _id: id }, function(error, duck) {
    if(error) return response.json({message: 'Could not find duck b/c:' + error});

    if (request.body.name) duck.name = request.body.name;
    if (request.body.location) duck.location = request.body.location;
    if (request.body.status) duck.status = request.body.status;
    if (request.body.desc) duck.desc = request.body.desc;

    duck.save(function(error) {
      if (error) return response.status(404).json({messsage: 'Could not update duck b/c:' + error});

      response.json({ message: 'duck successfully updated', duck: duck });
    });
  }).select('-__v');
}


//DELETE
function removeDuck(request, response) {
  var id = request.params.id;

  Duck.remove({ _id: id }, function(error) {
    if(error) response.json({ message: 'Could not delete duck b/c:' + error });
    response.json({ message: 'duck successfully deleted' });
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createDuck: createDuck,
  getDuck: getDuck,
  updateDuck: updateDuck,
  removeDuck: removeDuck
}
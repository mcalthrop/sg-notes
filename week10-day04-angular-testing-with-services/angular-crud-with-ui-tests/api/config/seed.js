// run `npm run seed` to execute this file
// this will only work for single models with no associations but the concept can be applied to anything really. 


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sparta-ducks');
var Duck = require('../models/Duck');

var records = [
  addRecord({
    name: 'Steve The Duck',
    location: 'Gildford ',
    color: 'white',
    desc: 'Likes to pretend that he is a swan'
  }),
  addRecord({
    name: 'Dr Duck',
    location: 'Under your bed',
    color: 'yellow',
    desc: 'Is known to bite. '
  }),
  addRecord({
    name: 'Bob the Duck',
    location: 'Hyde Park',
    color: 'green',
    desc: 'Huge Ego. '
  })
]


function addRecord (data) {
  return new Promise (function (resolve, reject) {
    new Duck(data).save(resolve);
  })
}

console.log('Seeding the database...')
Promise.all(records).then(process.exit);



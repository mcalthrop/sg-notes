angular
  .module('angularDirectives')
  .controller('mainController', mainController);

function mainController () {
  var controller = this;

  controller.people = [
    {
      name: 'Niall',
      age: 37,
      gender: 'male',
      position: 'Instructor',
      skills: ['eating', 'being awesome', 'sleeping']
    },
    {
      name: 'Matt',
      age: 21,
      gender: 'male',
      position: 'Instructor',
      skills: ['Extreme Ping Pong', 'Angular']
    },
    {
      name: 'Lexie',
      age: 21,
      gender: 'female',
      position: 'Academy Manager',
      skills: ['keeping the wheel spinning', 'life', 'knitting', 'danceing']
    },
    {
      name: 'Steve',
      age: 6,
      gender: 'male',
      position: 'Instructor/Education Author',
      skills: ['Banter', 'life', 'keeping people motivated']
    }
  ];
}
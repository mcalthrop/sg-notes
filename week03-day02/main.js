console.log('in main.js');

console.log('--- Objects:');
var person1 = {
  firstName: 'Bob',
  lastName: 'le Plant',
  email: 'bob@spartaglobal.co',
  age: 12.5
};
var person2 = {
  firstName: 'Aretha',
  lastName: 'Franklin',
  email: 'ms.legend@example.com',
  age: 29
};
var person3 = {
  fristName: 'Joe',
  email: 4,
  hobbies: ['boxing', 'hitting']
};
var people = [ person1, person2, person3 ];
for (var i = 0; i < people.length ; i++) {
  console.log(people[i].firstName, people[i].age);
}

var p = {};
p.firstName = 'Fred';
p.lastName = 'Flintstone';
// etc

var a = {};
if (a === {}) {
  console.log('Yeah they are equal!');
} else {
  console.log('NOT! They are not equal!');
}

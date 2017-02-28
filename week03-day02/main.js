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

console.log('--- Functions:');

function createPerson(firstName, lastName, email, age) {
  var newPerson = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age
  };

  return newPerson;
}

var harald = createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);
console.log('newPerson:', harald);

function isOldEnough(age) {
  return (age >= 18);
}

if (isOldEnough(harald.age)) {
  console.log('Come in');
} else {
  console.log('Come back when you are older.');
}

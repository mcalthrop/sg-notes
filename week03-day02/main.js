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

var capitalCity = 'London';  // global variable

function createPerson(firstName, lastName, email, age) {
  var newPerson = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    capitalCity: capitalCity, // access global variable from within function
    fullName: function() {
      return firstName + ' ' + lastName + ' from ' + capitalCity;
    }
  };

  return newPerson;
}

var harald = createPerson('Harald', 'Kumar', 'h.kumar@example.com', 15);
console.log('new person\'s full name:', harald.fullName());
var tola = createPerson('Tola', 'Olaoke', 'tolaoke@spartaglobal.co', 21);
var asma = createPerson('Asma', 'Chaima', 'achaima@spartaglobal.co', 21);
people = [];
people.push(harald, asma, tola);

function isOldEnough(age) {
  return (age >= 18);
}

if (isOldEnough(harald.age)) {
  console.log('Come in');
} else {
  console.log('Come back when you are older.');
}

var oldEnoughComment;
for (i = 0; i < people.length ; i++) {
  oldEnoughComment = (isOldEnough(people[i].age))
    ? 'is old enough'
    : 'is NOT old enough';
  console.log(people[i].fullName(), oldEnoughComment);
}

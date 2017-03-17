// Basic seeds file.
// Poorly-executed, but does the job of creating one user, who has 2 books.
var User = require('../models/user-model');
var Book = require('../models/book-model');
var mongoose = require('mongoose');

function seedData() {
  var book1 = new Book();
  var book2 = new Book();
  var user = new User();
  var booksSaved = [];

  book1.title = 'Great Expectations';
  book1.author = 'Chucky D';
  book2.title = '1984';
  book2.author = 'George Orwell';

  book1.save(function (err, book1Result) {
    if (err) {
      console.log('could not create book1: err:', err);
      process.exit(1);
    }
    booksSaved.push(book1Result);
    book2.save(function (err, book2Result) {
      if (err) {
        console.log('could not create book2: err:', err);
        process.exit(1);
      }
      booksSaved.push(book2Result);
      console.log('booksSaved:', booksSaved);
      user.firstName = 'Freddie';
      user.lastName = 'Mercury';
      user.email = 'freddie@example.com';
      user.books.push(booksSaved[0]._id);
      user.books.push(booksSaved[1]._id);
      user.save(function (err, userResult) {
        if (err) {
          console.log('could not create user: err:', err);
          process.exit(1);
        }
        console.log('user saved:', userResult);
        mongoose.connection.close();
      });
    });
  });
}

function initDb() {
  mongoose.connect('mongodb://localhost/sg-mvc', {}, function (err) {
    if (err) {
      console.log('could not connect to db: err:', err);
      process.exit(1);
    }
    console.log('connected');
    User.remove({}, function(err) {
      if (err) {
        console.log('could not drop User collection: err:', err);
        process.exit(1);
      }
      console.log('dropped users');
      Book.remove({}, function(err) {
        if (err) {
          console.log('could not drop Book collection: err:', err);
          process.exit(1);
        }
        console.log('dropped books');
        seedData();
      });
    });
  });
}

initDb();

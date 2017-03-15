var User = require('../models/user-model');

// Action: index
function indexUsers(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log('Could not get list of users:', err);
      return;
    }
    res.render('users/index', {
      title: 'User list',
      users: users
    });
  });
}

// Action: new
function newUser(req, res) {
  res.render('users/new', {
    title: 'New user'
  });
}

// Action: create
function createUser(req, res) {
  var newUser = new User();

  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.email = req.body.email;

  newUser.save(function (err) {
    if (err) {
      console.log('Could not create new user:', err);
      return;
    }
    res.redirect('/users');
  });
}

// Action: edit
function editUser(req, res) {
  var userId = req.params.id;

  User.findOne({ _id: userId }, function (err, user) {
    if (err) {
      console.log('Could not get user:', err);
      res.status(404).send();
      return;
    }
    console.log('user:', user);
    res.render('users/edit', {
      title: 'Edit user',
      user: user
    });
  });
}

// Action: update
function updateUser(req, res) {
  var userId = req.params.id;
  var updatedUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };

  User.findOneAndUpdate({ _id: userId }, updatedUser, function (err) {
    if (err) {
      console.log('Could not get existing user to update:', err);
      res.status(404).send();
      return;
    }
    res.redirect('/users');
  });
}

// Action: show
function showUser(req, res) {
  var userId = req.params.id;

  User.findOne({ _id: userId }, function (err, user) {
    if (err) {
      console.log('Could not get user:', err);
      res.status(404).send();
      return;
    }
    console.log('user:', user);
    res.render('users/show', {
      title: 'Show user',
      user: user
    });
  });
}

// Action: destroy
function destroyUser(req, res) {
  var userId = req.params.id;

  User.deleteOne({ _id: userId }, function (err) {
    if (err) {
      console.log('Could not get user to delete:', err);
      res.status(404).send();
      return;
    }
    res.redirect('/users');
  });
}

module.exports = {
  index: indexUsers,
  new: newUser,
  create: createUser,
  edit: editUser,
  update: updateUser,
  show: showUser,
  destroy: destroyUser
};

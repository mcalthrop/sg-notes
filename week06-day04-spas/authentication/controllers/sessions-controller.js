var User = require('../models/user-model');

function newLogin(req, res) {
  res.render('sessions/new', {
    title: 'Log in'
  });
}

function createSession(req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log('Error getting user (creating session):', err.message);
      res.status(500).send('Error getting user (creating session)');
      return;
    }
    if (!user) {
      console.log('Could not get user (creating session)');
      res.status(404).send('Could not get user (creating session)');
      return;
    }
    // here's where we would check password against the one stored in the database
    // (however we have not included a password field in our Model at this point)
    // so the next step is to store the user details in the session:
    req.session.userId = user.id;
    res.redirect('/users');
  });
}

function deleteSession(req, res) {
  delete req.session.userId;
  res.redirect('/sessions/new');
}

module.exports = {
  new: newLogin,
  create: createSession,
  delete: deleteSession
};

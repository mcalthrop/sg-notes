var Book = require('../models/book-model');

// Action: destroy
function destroyBook(req, res) {
  var bookId = req.params.id;
  var userId = req.body.userId;

  Book.deleteOne({ _id: bookId }, function (err) {
    if (err) {
      console.log('Could not get book to delete:', err.message);
      res.status(404).send('Could not get book to delete');
      return;
    }
    res.redirect('/users/' + userId);
  });
}

module.exports = {
  destroy: destroyBook
};

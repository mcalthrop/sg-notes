var express = require('express')
var router = express.Router()

var duckController = require('../controllers/duck');

router.route('/ducks')
  .get(duckController.getAll)
  .post(duckController.createDuck);

router.route('/ducks/:id')
  .get(duckController.getDuck)
  .patch(duckController.updateDuck)
  .delete(duckController.removeDuck);


module.exports = router
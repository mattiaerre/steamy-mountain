var express = require('express');
var router = express.Router();
var Restaurant = require('../../playground/mongodb/restaurant-model');

router.get('/', function(req, res, next) {
  Restaurant.find({}, function(error, docs) {
    if (error) {
      console.log('error:', error);
      res.send([]);
    }

    else res.send(docs);
  });

});

module.exports = router;

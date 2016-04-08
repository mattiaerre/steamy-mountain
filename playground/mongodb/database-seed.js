// see: http://mongoosejs.com/docs/index.html

var mongoose = require('mongoose');
var Restaurant = require('./restaurant-model');

mongoose.connect('mongodb://localhost/steamy-mountain');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we\'re connected!');

  seed();
});

/*
  require('../data/foreign-cinema.json'),
  require('../data/hakkasan-san-francisco.json'),
  require('../data/waterbar.json')
*/

function seed() {
  Restaurant.remove({}, function(error) {
    if (error) return console.log('error:', error);
    return console.log('collection removed')
  });

  save(new Restaurant(require('../../data/foreign-cinema.json')));
  save(new Restaurant(require('../../data/hakkasan-san-francisco.json')));
  save(new Restaurant(require('../../data/waterbar.json')));
}

function save(restaurant) {
  restaurant.save(function(error, item) {
    if (error) return console.log('error:', error);
    return console.log(item.name + ' has been saved');
  });
}

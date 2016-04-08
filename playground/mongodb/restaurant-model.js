var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  city: String,
  state: String,
  area: String,
  postal_code: String,
  country: String,
  phone: String,
  lat: Number,
  lng: Number,
  price: Number,
  reserve_url: String,
  mobile_reserve_url: String,
  image_url: String
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant
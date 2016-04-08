var React = require('react');
var ReactDOM = require('react-dom');
var reqwest = require('reqwest');

var RestaurantList = require('./components/RestaurantList.jsx');
var Counter = require('./components/Counter.jsx');

reqwest({
  url: 'v0/restaurants',
  type: 'json',
  method: 'GET',
  error: function(error) {
    console.log('error:', error);
    ReactDOM.render(<RestaurantList data={[]} />, container);
  },
  success: function(response) {
    ReactDOM.render(<RestaurantList data={response} />, container);
  }
})

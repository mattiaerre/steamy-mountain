var React = require('react');
var ReactDOM = require('react-dom');

var RestaurantList = require('./components/RestaurantList.jsx');
var Counter = require('./components/Counter.jsx');

// todo: get from server
/*
var data = [
  require('../data/foreign-cinema.json'),
  require('../data/hakkasan-san-francisco.json'),
  require('../data/waterbar.json')
];
*/

var data = [];

ReactDOM.render(<RestaurantList data={data} />, container);

//ReactDOM.render(<Counter />, container);
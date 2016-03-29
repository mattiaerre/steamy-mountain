var React = require('react');
var RestaurantItem = require('./RestaurantItem.jsx');

module.exports = React.createClass({
  render: function() {
    var model = this.props.data;

    return (
      <div>
        <ul>
          {
            model.map(function(item, index) {
              return (
                <RestaurantItem data={item} />
              )
            })
          }
        </ul>
      </div>
    )
  }
});

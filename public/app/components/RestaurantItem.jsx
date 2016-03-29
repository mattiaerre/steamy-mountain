var React = require('react');

module.exports = React.createClass({
  render: function() {
    var model = this.props.data;

    return (
      <li>
        <h2>{model.name}</h2>
        <img src={model.image_url} alt={model.name}/>
        <div>{model.address} {model.city} {model.state}</div>
      </li>
    )
  }
});

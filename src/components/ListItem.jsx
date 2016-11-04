var React = require('react');
var CarCard = require('./CarCard.jsx');

var ListItem = React.createClass({
  render: function(){
    return(
      <li>
        <CarCard photo={this.props.photo} text={this.props.text} />
      </li>
    );
  }

});

module.exports = ListItem;

var React = require('react');
var CarCard = require('./CarCard.jsx');

var ListItem = React.createClass({
  render: function(){
    return(
      <li style={{listStyle: "none", paddingTop: 10}}>
        <CarCard photo={this.props.photo} title={this.props.title} size={this.props.size} priceCity={this.props.priceCity} priceUncity={this.props.priceUncity}/>
      </li>
    );
  }

});

module.exports = ListItem;

var React = require('react');
var ListItem = require('./ListItem.jsx');


var List = React.createClass({
  render: function(){

    var listItems = function(item, index){
      return <ListItem key={item.id+index} photo={item.photo} title={item.title} size={item.size} priceCity={item.priceCity} priceUncity={item.priceUncity}/>;
    };

    return(<ul style={{paddingLeft: 0}}>{this.props.carData.map(listItems)}</ul>);
  }

});

module.exports = List;

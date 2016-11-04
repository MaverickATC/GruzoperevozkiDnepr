var React = require('react');
var ListItem = require('./ListItem.jsx');

var cars = [{"id":1, "photo":"#"}, {"id":2, "photo":"#"}, {"id":3, "photo":"#"}];

var List = React.createClass({
  render: function(){

    var listItems = cars.map(function(item){
      return <ListItem key={item.id} photo={item.photo} />;
    });

    return(<ul>{listItems}</ul>);
  }

});

module.exports = List;

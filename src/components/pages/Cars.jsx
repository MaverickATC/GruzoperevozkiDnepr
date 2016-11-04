var React = require('react');
var List = require('../List.jsx');

var Cars = React.createClass({
  render(){
    var divStyle = {
      background: "#9eebe5",
      width: "100%"
    }

    return(
      <div>
        <List />
      </div>
    );
  }
});

module.exports = Cars;

var React = require('react');
var List = require('../List.jsx');


var cars = [
  {"id":1, "photo":"/img/2.jpg", "title":"Mercedes Sprinter", "price":"250 uah/km"},
  {"id":2, "photo":"/img/4.jpg", "title":"Mercedes Sprinter", "price":"240 uah/km"},
  {"id":3, "photo":"/img/5.jpg", "title":"Mercedes Sprinter", "price":"240 uah/km"}
];

var Cars = React.createClass({
  render(){
    var divStyle = {
      //background: "#9eebe5",
      width: "100%"
    }

    return(
      <div className="container-fluid" style={{padding:0}}>
        <List carData={cars}/>
      </div>
    );
  }
});

module.exports = Cars;

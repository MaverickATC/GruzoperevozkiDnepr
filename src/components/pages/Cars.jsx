var React = require('react');
var carList = require('./cars.json');
var List = require('../List.jsx');


var Cars = React.createClass({
  render(){
    return(
      <div className="container-fluid" style={{padding:0}}>
        <div className="panel panel-default" style={{marginBottom:0, borderRadius:0}}>
          <List carData={carList}/>
        </div>
      </div>
    );
  }
});

module.exports = Cars;

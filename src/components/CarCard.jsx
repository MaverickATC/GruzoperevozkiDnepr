var React = require('react');

var CarCard = React.createClass({
  render: function(){
  var divStyle = {
    height: 100,
    margin: "auto"
  }

    return(
        <div>
          <div style={divStyle} className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <img src="#" alt="carPhoto" />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              some text
            </div>
          </div>
        </div>
    );
  }

});

module.exports = CarCard;

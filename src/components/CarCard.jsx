var React = require('react');

var CarCard = React.createClass({
  render: function(){
  var divStyle = {
    height: 250,
    margin: "auto"
  }

    return(

          <div style={divStyle} className="row panel panel-default">
            <div className=" col-xs-4 col-sm-6 col-md-4 col-lg-4 hidden-xs">
              <img style={{width:300, height:240, paddingTop:4}} src={this.props.photo} alt="carPhoto" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
              <div className="panel-heading">
                <h3 className="panel-title">{this.props.title}</h3>
              </div>
              <div className="panel-body">{this.props.price}</div>
            </div>
          </div>

    );
  }

});

module.exports = CarCard;

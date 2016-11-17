var React = require('react');

var CarCard = React.createClass({
  render: function(){
  var divStyle = {
    height: 250,
    margin: "auto"
  }

    return(

          <div style={divStyle} className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 hidden-xs">
              <img style={{width:300, height:240, paddingTop:4}} src={this.props.photo} alt="carPhoto" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 text-center">
              <div className="">
                <h3 className="">{this.props.title}</h3>
              </div>
              <div className="">
                <div>{this.props.size}</div>
                <div>{this.props.priceCity}</div>
                <div>{this.props.priceUncity}</div>
              </div>
            </div>
          </div>

    );
  }

});

module.exports = CarCard;

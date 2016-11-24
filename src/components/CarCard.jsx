var React = require('react');
var Link = require('react-router').Link;

var CarCard = React.createClass({
  render: function(){

  var divStyle = {
    height: 250,
    margin: "auto"
  }
  var linkStyle = {
    color: "#777",
    textShadow: "0 1px 0 rgba(255,255,255,.25)",
    paddingTop: 10,
    paddingBottom: 10,
    //lineHeight: 20,
    position: "relative",
    display: "block",
    
    textDecoration: "none",
    backgroundColor: "transparent",
    width: "100%",
    height: 50,
    fontSize: "1.5em",
    marginTop: 15
  }

    return(
        <div>
          <div style={divStyle} className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 hidden-xs">
              <img style={{width:300, height:240, paddingTop:4}} src={this.props.photo} alt="carPhoto" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 text-center">
              <h3 className="">{this.props.title}</h3>
              <div className="">
                <div>{this.props.size}</div>
                <div>{this.props.priceCity}</div>
                <div>{this.props.priceUncity}</div>
              </div>
              <Link style={linkStyle} to="/contacts">Заказать</Link>
            </div>
          </div>
          <div style={{margin:0, padding:0}} className="row">
            <hr color="#3f3f3f" height="2" style={{margin:0, padding:0}} />
          </div>
        </div>
    );
  }

});

module.exports = CarCard;

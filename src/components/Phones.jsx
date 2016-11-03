var React = require('react');

var Phones = React.createClass({
  render(){
    var divStyle = {
        width: 150,
        background: "#aaa",
        height: 40,
        marginTop: 5
    }

    return(
      <div>
        <div style={divStyle} className="phone">
          <span><a href="tel:+380987077344">+38(098)707-73-44</a></span>
        </div>
        <div style={divStyle} className="phone">
          <span><a href="tel:+380507871230">+38(050)787-12-30</a></span>
        </div>
      </div>
    );
  }
});

module.exports = Phones;

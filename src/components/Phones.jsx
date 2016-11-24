var React = require('react');

var Phones = React.createClass({
  render(){
    var spanStyle = {
        display: "block",
        width: 200,
        //background: "-webkit-linear-gradient(#f8f8f8, #fff)",
        height: 40,
        marginTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 6,
        textAlign: "center",
        textDecoration: "none",
        lineHeight: "180%",
        fontSize: "1.5em",
        textWeight: 700,
        color: "#fff"
    }

    return(
      <div className="phone">
        <span style={spanStyle}>+38(098)707-73-44</span>
        <span style={spanStyle}>+38(050)787-12-30</span>
      </div>
    );
  }
});

module.exports = Phones;

var React = require('react');

var LogoMobile = React.createClass({
  render(){
    var divStyle = {
        //width: 300,
        background: "#fff",
        height: "100%",
        margin: 0,
        paddingTop: 20,
        backgroundColor: "-webkit-linear-gradient(#f8f8f8, #fff)",
        backgroundImage: "url(./img/logo.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "80% 100%",
        backgroundPosition: "top center"
    }

    return(
      <div style={divStyle} className="logo text-center">
      </div>
    );
  }
});

module.exports = LogoMobile;

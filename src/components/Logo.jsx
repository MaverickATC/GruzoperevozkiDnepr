var React = require('react');

var Logo = React.createClass({
  render(){
    var divStyle = {
        width: 200,
        //background: "-webkit-linear-gradient(#f8f8f8, #fff)",
        height: 85,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: "-webkit-linear-gradient(#f8f8f8, #fff)",
        backgroundImage: "url(./img/logo.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    }

    return(
      <div style={divStyle} className="logo">

      </div>
    );
  }
});

module.exports = Logo;

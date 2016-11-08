var React = require('react');

var LogoMobile = React.createClass({
  render(){
    var divStyle = {
        //width: 300,
        background: "#aaa",
        height: 85,
        marginTop: 5
    }

    return(
      <div style={divStyle} className="logo">ЧП Андрейченко</div>
    );
  }
});

module.exports = LogoMobile;

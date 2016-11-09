var React = require('react');

var LogoMobile = React.createClass({
  render(){
    var divStyle = {
        //width: 300,
        background: "#fff",
        //height: 85,
        margin: 0,
        paddingTop: 20
    }

    return(
      <div style={divStyle} className="logo text-center">ЧП Андрейченко</div>
    );
  }
});

module.exports = LogoMobile;

var React = require('react');

var Logo = React.createClass({
  render(){
    var divStyle = {
        width: 300,
        background: "#fff",
        height: 100,
        marginTop: 25
    }

    return(
      <div style={divStyle} className="logo">Logo</div>
    );
  }
});

module.exports = Logo;

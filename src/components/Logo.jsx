var React = require('react');

var Logo = React.createClass({
  render(){
    var divStyle = {
        width: 300,
        background: "#aaa",
        height: 85,
        marginTop: 5
    }

    return(
      <div style={divStyle} className="logo"> Logo <br />
        ЧП Андрейченко
      </div>
    );
  }
});

module.exports = Logo;

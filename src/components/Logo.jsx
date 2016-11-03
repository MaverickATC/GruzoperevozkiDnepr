var React = require('react');

var Logo = React.createClass({
  render(){
    var divStyle = {
        width: 300,
        background: "#fff",
        height: 100,
        marginLeft: 25,
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

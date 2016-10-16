var React = require('react');

var Phones = React.createClass({
  render(){
    var divStyle = {
        width: 300,
        background: "#222",
        height: 50,
    }

    return(
      <div>
        <div style={divStyle} className="phone">
          <span>000 123 45 67</span>
        </div>
        <div style={divStyle} className="phone">
          <span>000 123 45 67</span>
        </div>
        <div style={divStyle} className="phone">
          <span>000 123 45 67</span>
        </div>
      </div>
    );
  }
});

module.exports = Phones;

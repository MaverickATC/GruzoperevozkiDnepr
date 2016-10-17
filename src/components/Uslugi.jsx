var React = require('react');

var Uslugi = React.createClass({
    render() {
      divStyle = {
        background: "#f0ebe5",
        width: "100%"
      }

      return(
        <div style={divStyle} >
          <p>Uslugi Page</p>
        </div>
      );
    }
});

module.exports = Uslugi;

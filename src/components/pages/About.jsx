var React = require('react');

var About = React.createClass({
    render() {
      divStyle = {
        background: "#f0ebe5",
        width: "100%"
      }

      return(
        <div style={divStyle} >
          <p>About Page</p>
        </div>
      );
    }
});

module.exports = About;

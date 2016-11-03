var React = require('react');

var Home = React.createClass({
    render() {
      divStyle = {
        background: "#f0ebe5",
        width: "100%"
      }

      return(
        <div style={divStyle} >
          <p>Home Page</p>
        </div>
      );
    }
});

module.exports = Home;

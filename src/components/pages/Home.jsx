var React = require('react');

var Home = React.createClass({
    render() {
      divStyle = {
        //background: "#f0ebe5",
        width: "100%"
      }

      return(
        <div className="container-fluid" style={{padding:0}}>
          <div style={{padding:15}}>
            <h1>Home Page</h1>
          </div>
        </div>
      );
    }
});

module.exports = Home;

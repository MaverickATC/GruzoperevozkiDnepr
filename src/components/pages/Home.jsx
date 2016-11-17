var React = require('react');

var Home = React.createClass({
    render() {
      divStyle = {
        //background: "#f0ebe5",
        width: "100%"
      }

      return(
        <div className="container-fluid" style={{padding:0}}>
          <div className="panel panel-default" style={{padding:15, margin:0, borderRadius:0}}>
            <h1>Home Page</h1>
          </div>
        </div>
      );
    }
});

module.exports = Home;

var React = require('react');

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var Menu = require('./Menu.jsx');

var App = React.createClass({
    render() {
      divStyle = {
        background: "#f0ebe5"

      }

      return(
        <div style={divStyle} className="App">
          <header><Header /></header>
          <Menu />
          {this.props.children}
          <footer><Footer /></footer>
        </div>
      );
    }
});

module.exports = App;

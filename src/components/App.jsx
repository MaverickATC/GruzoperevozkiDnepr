var React = require('react');

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var Menu = require('./Menu.jsx');

var App = React.createClass({
    render() {
      return(
        <div>
          <Header />
          <Menu />
          <p>Some Text</p>
          <Footer />
        </div>
      );
    }
});

module.exports = App;

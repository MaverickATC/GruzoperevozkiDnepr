var React = require('react');

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var NavBar = require('./nav/NavBar.jsx');

var navLinks = [
  {
    title: "Главная",
    href: "/"
  },
  {
    title: "Авто",
    href: "/cars"
  },
  {
    title: "Фото",
    href: "/photo"
  },
  {
    title: "Контакты",
    href: "/contacts"
  }

];


var App = React.createClass({
    render() {
      return(
        <div className="App">
          <header><Header /></header>
          <NavBar navData={navLinks} />
          {this.props.children}
          <footer><Footer /></footer>
        </div>
      );
    }
});

module.exports = App;

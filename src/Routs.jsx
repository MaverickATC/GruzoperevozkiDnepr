var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var App = require('./components/App.jsx');
var Uslugi = require('./components/Uslugi.jsx');
var About = require('./components/About.jsx');

var Routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="/uslugi" component={Uslugi} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

module.exports = Routes;

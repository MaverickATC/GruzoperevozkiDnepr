var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');
var History = new CreateHistory({
  queryKey: false
});

var App = require('./components/App.jsx');
var Home = require('./components/pages/Home.jsx');
var Uslugi = require('./components/pages/Uslugi.jsx');
var About = require('./components/pages/About.jsx');
var Contacts = require('./components/pages/Contacts.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/uslugi" component={Uslugi} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </Route>
  </Router>
);

module.exports = Routes;

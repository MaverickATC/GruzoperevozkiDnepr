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
var Contacts = require('./components/pages/Contacts.jsx');
var Cars = require('./components/pages/Cars.jsx');
var Photo = require('./components/pages/Photo.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/cars" component={Cars} />
      <Route path="/photo" component={Photo} />
    </Route>
  </Router>
);

module.exports = Routes;

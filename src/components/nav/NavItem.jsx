var React = require('react');
var Link = require('react-router').Link;

var NavItem = React.createClass({
  render(){

    return(
      <li><Link to={this.props.href}>{this.props.title}</Link></li>
    );
  }
});

module.exports = NavItem;

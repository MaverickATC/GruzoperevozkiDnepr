var React = require('react');
var Link = require('react-router').Link;
var NavItem = require('./NavItem.jsx');

var NavBar = React.createClass({
  render(){

    var createLinkItem = function(item, index){
      return <NavItem key={item.title+index} title={item.title} href={item.href} />
    };

    return(
      <div className="container-fluid" style={{padding:0, marginTop:10, marginBottom:10}}>
        <nav role="navigation" className="navbar navbar-default" style={{borderRadius: 0,margin: 'auto'}}>
          <div className="container" style={{margin:0}}>
            <div className="navbar-header" style={{paddingLeft: 15,paddingTop: 5}}>
              <button type="button" style={{marginTop: 3}} className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <h4><Link to="/">Грузоперевозки Днепр</Link></h4>
            </div>
            <div className="collapse navbar-collapse" id="nav-collapse" aria-expanded="false">
              <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;

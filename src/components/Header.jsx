var React = require('react');
var Logo = require('./Logo.jsx');
var LogoMobile = require('./LogoMobile.jsx');
var Phones = require('./Phones.jsx');

var Header = React.createClass({
    render() {
      var divStyle = {
        background: "url(/img/header.jpg)",
        height: 200,
        padding: 0,
        margin: 0
      }

      var rowStyle = {
          paddingTop: 20
      }

      return(
        <div className="page-header container-fluid">
          <div className="row" style={divStyle}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row" style={rowStyle}>
                <div className="col-sm-6 col-md-6 col-lg-6 hidden-xs">
                  <div className="pull-left"><Logo /></div>
                  <div className="visible-xs-block"><LogoMobile /></div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 hidden-xs">
                  <div className="pull-right"><Phones /></div>
                </div>
                <div className="col-xs-12 visible-xs-block">Грузоперевозки Днепр</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Header;

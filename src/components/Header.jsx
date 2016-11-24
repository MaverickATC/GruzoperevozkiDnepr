var React = require('react');
var Logo = require('./Logo.jsx');
var LogoMobile = require('./LogoMobile.jsx');
var Phones = require('./Phones.jsx');

var Header = React.createClass({
    render() {
      var divStyle = {
        backgroundImage: "url(./img/header2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: 400,
        padding: 0,
        margin: 0
      }

      return(
        <div className="page-header container-fluid" style={{padding:0, marginTop:15, marginBottom:0}}>
          <div className="row hidden-xs" style={divStyle}>
            <div className="col-sm-12 col-md-12 col-lg-12" style={{paddingTop:20}}>
              <Logo />
              <Phones />
            </div>
          </div>
          <div className="row visible-xs-block" style={{margin:0,padding:0,width:"100%",height:100}}>
            <LogoMobile />
          </div>
        </div>
      );
    }
});

module.exports = Header;

var React = require('react');
var Link = require('react-router').Link;

var Footer = React.createClass({
    render() {


      return(
        <div className="container-fluid" style={{paddingLeft:0, paddingRight:0}}>
          <div className="panel panel-default" style={{margin:"auto", height:50}}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{paddingTop:15, display: "flex", alignItems: "center", justifyContent: "center"}}>
                Copyright @ 2016  &nbsp;  &nbsp; <Link to="/">Грузоперевозки Днепр</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Footer;

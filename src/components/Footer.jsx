var React = require('react');

var Footer = React.createClass({
    render() {


      return(
        <div className="container-fluid">
          <div className="panel panel-default" style={{margin:"auto", height:"100"}}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                Footer <br />
                Copyright
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = Footer;

var React = require('react');
var Logo = require('./Logo.jsx');
var Phones = require('./Phones.jsx');

var Header = React.createClass({
    render() {
      var divStyle = {
        background: '#ccc',
        height: 300
      }

      var rowStyle = {
          height: 50
      }

      return(
        <div className="row page-header">
          <div style={divStyle} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Logo />
              </div>
              <div className="col-xs-offset-10 col-sm-offset-10 col-md-offset-10 col-lg-offset-10">
                <Phones />
              </div>
            </div>

          </div>
        </div>
      );
    }
});

module.exports = Header;

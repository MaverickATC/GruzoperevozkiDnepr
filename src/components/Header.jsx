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
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xs-offset-6 col-sm-offset-6 col-md-offset-6 col-lg-offset-6">
                <Phones />
              </div>
            </div>

          </div>
        </div>
      );
    }
});

module.exports = Header;

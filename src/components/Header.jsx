var React = require('react');
var Logo = require('./Logo.jsx');
var Phones = require('./Phones.jsx');

var Header = React.createClass({
    render() {
      var divStyle = {
        background: '#ccc',
        height: 300,
        padding: 0,
        margin: 0
      }

      var rowStyle = {
          height: 50
      }

      return(
        <div>
          <div className="row" style={divStyle}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <div style={rowStyle} className="row"></div>
                  <div style={rowStyle} className="row">
                    <Logo />
                  </div>
                </div>
                <div className="col-xs-offset-10 col-sm-offset-10 col-md-offset-10 col-lg-offset-10">
                  <div style={rowStyle} className="row"></div>
                  <div style={rowStyle} className="row">
                    <Phones />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      );
    }
});

module.exports = Header;

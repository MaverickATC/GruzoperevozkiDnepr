var React = require('react');

var Footer = React.createClass({
    render() {
      var divStyle = {
        background: '#ccc',
        height: 100
      }

      return(
        <div className="row">
          <div style={divStyle} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            Footer
            Copyright
          </div>
        </div>
      );
    }
});

module.exports = Footer;

var React = require('react');

var Footer = React.createClass({
    render() {
      var divStyle = {
        background: '#ccc',
        height: 100,
        width: "100%",
        margin: 0
      }

      return(
        <div className="row" style={divStyle} >
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            Footer
            Copyright
          </div>
        </div>
      );
    }
});

module.exports = Footer;

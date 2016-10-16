var React = require('react');

var Menu = React.createClass({
  render(){
    divStyle = {
      height: 35,
      background: "#ccc",
      margin: 0
    }

    btnDivStyle = {
      padding: 0
    }

    btnStyle = {
      width: "100%"
    }

    return(
      <div className="menu row">
        <div style={btnDivStyle} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div style={divStyle} className="row">
              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">1</button>
              </div>
              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">2</button>
              </div>
              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">3</button>
              </div>
              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">4</button>
              </div>
              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">5</button>
              </div>
              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">6</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Menu;

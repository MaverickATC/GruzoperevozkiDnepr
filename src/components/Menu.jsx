var React = require('react');

var Menu = React.createClass({
  render(){
    divStyle = {
      height: 35,
      margin: 0
    }

    btnDivStyle = {
      padding: 2
    }

    btnStyle = {
      width: "100%",
      outline: "none"
    }

    mS ={
      width: "100%",
      margin: 0
    }

    return(
      <div className="menu row" style={mS}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div style={divStyle} className="row">
              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">Главная</button>
              </div>
              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">Авто</button>
              </div>

              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">Фото</button>
              </div>

              <div style={btnDivStyle} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button style={btnStyle} className="btn btn-primary">Контакты</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = Menu;

var React = require('react');

var Contacts = React.createClass({
  render(){
    var divStyle = {
      background: "#f0ebe5",
      width: "100%"
    }

    return(
      <div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>Контакты</h1>
                <address>
                  Днепропетровская обл. <br />
                  Днепропетровский р-н <br />
                  село Новоалександровка <br />
                  ул. Сурская, 100
                </address>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2>Телефоны</h2>
                <div className="phone">
                  <span><a href="tel:+380987077344">+38(098)707-73-44</a></span>
                </div>
                <div className="phone">
                  <span><a href="tel:+380507871230">+38(050)787-12-30</a></span>
                </div>
                <h3>Круглосуточно</h3>
              </div>
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <h3>Схема проезда</h3>
            <img src="#" alt="mapImg" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contacts;

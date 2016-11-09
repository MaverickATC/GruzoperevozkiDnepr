var React = require('react');

var Contacts = React.createClass({
  render(){
    var divStyle = {
      //background: "#f0ebe5",
      width: "100%"
    }

    return(
      <div className="container-fluid" style={{marginTop:15,marginBottom:15,paddingLeft:0,paddingRight:0}}>
        <div className="panel panel-default" style={{margin:"auto"}}>
          <div className="row" style={{padding:15}}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 text-center">
              <h1>Контакты</h1>
                <address>
                  Днепропетровская обл. <br />
                  Днепропетровский р-н <br />
                  село Новоалександровка <br />
                  ул. Сурская, 100
                </address>
              <h2>Телефоны</h2>
              <div className="phone">
                <span><a href="tel:+380987077344">+38(098)707-73-44</a></span>
              </div>
              <div className="phone">
                <span><a href="tel:+380507871230">+38(050)787-12-30</a></span>
              </div>
                <h3>Круглосуточно</h3>
            </div>

            <div className="hidden-xs col-sm-8 col-md-8 col-lg-9">
              <h3>Схема проезда</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112877.5630915414!2d34.91295696464396!3d48.38373177219912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfa7c7bc65327%3A0xdc37b140e7434650!2z0KHRg9GA0YHRjNC60LAg0LLRg9C70LjRhtGPLCAxMDAsINCd0L7QstC-0L7Qu9C10LrRgdCw0L3QtNGA0ZbQstC60LAsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1MjA3MA!5e0!3m2!1sru!2sua!4v1478469488476" width={"100%"} height="400" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Contacts;

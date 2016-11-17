var React = require('react');

var Home = React.createClass({
    render() {
      divStyle = {
        //background: "#f0ebe5",
        width: "100%"
      }

      return(
        <div className="container-fluid" style={{padding:0}}>
          <div className="panel panel-default" style={{padding:15, margin:0, borderRadius:0, background: "-webkit-linear-gradient(#f8f8f8, #fff)"}}>
            <h1>Home Page</h1>
            <p>
              "ЧП Андрейченко" - транспортная компания из Днепра. Мы занимаемся перевозками грузов по Украине более десяти лет.
              Вы можете доверить нам свой груз, а мы позаботимся о максимально быстрой и безопасной доставке.
              <a href="#">Здесь</a> и <a href="#">Здесь</a> Вы можете ознакомится с отзывами наших клиентов.
            </p>
          </div>
        </div>
      );
    }
});

module.exports = Home;

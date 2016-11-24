var React = require('react');

var Home = React.createClass({
    render() {
      return(
        <div className="container-fluid" style={{padding:0}}>
          <div className="panel panel-default" style={{padding:15, margin:0, borderRadius:0, background: "-webkit-linear-gradient(#f8f8f8, #fff)"}}>
            <p>
              <b>"ЧП Андрейченко"</b> - транспортная компания с большим опытом. Мы занимаемся перевозками грузов по Украине более десяти лет.
              Вы можете доверить нам свой груз, а мы позаботимся о максимально быстрой и безопасной доставке. За годы работы была накоплена
              большая база клиентов.
            </p>
          </div>
        </div>
      );
    }
});

module.exports = Home;

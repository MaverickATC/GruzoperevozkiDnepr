var React = require('react');
var List = require('../List.jsx');


var cars = [
  {
    "id":1,
    "photo":"./img/2.jpg",
    "title":"Mercedes Sprinter 413 Гидроборт",
    "size":"ДШВ: 4.20м x 2.00м x 2.30м",
    "priceCity":"Город: 15 грн/час, мин. 2 часа",
    "priceUncity":"За городом: 5 грн/км, оплата пути в оба конца"
  },
  {
    "id":2,
    "photo":"./img/4.jpg",
    "title":"Mercedes Sprinter 413 Мебельный фургон",
    "size":"ДШВ: 4.50м x 2.21м x 2.10м",
    "priceCity":"Город: 15 грн/час, мин. 2 часа",
    "priceUncity":"За городом: 5 грн/км, оплата пути в оба конца"
  },
  {
    "id":3,
    "photo":"./img/5.jpg",
    "title":"Mercedes Sprinter 416",
    "size":"ДШВ: 4.25м x 1.80м x 1.80м",
    "priceCity":"Город: 15 грн/час, мин. 2 часа",
    "priceUncity":"За городом: 5 грн/км, оплата пути в оба конца"
  },
  {
    "id":4,
    "photo":"./img/1.jpg",
    "title":"Газель Тент",
    "size":"ДШВ: 5.10м x 2.00м x 2.20м",
    "priceCity":"Город: 15 грн/час, мин. 2 часа",
    "priceUncity":"За городом: 5 грн/км, оплата пути в оба конца"
  }
];

var Cars = React.createClass({
  render(){
    var divStyle = {
      //background: "#9eebe5",
      width: "100%"
    }

    return(
      <div className="container-fluid" style={{padding:0}}>
        <List carData={cars}/>
      </div>
    );
  }
});

module.exports = Cars;

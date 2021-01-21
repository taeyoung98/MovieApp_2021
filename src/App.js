import React from "react";
import PropTypes from "prop-types";

function Food({name, image, rate}){
  return (
  <>
  <h1>{name} is delicious!</h1>
  <h3>{rate}/5.0</h3>
  <img src={image} alt="food"/>
  </>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rate: PropTypes.number
}

const FoodILike = [
  {
    "id": 1,
    "name": "lamyeon",
    "src": "https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2020/05/23/20200523000093_0.jpg",
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "ram on a skewer",
    "src": "https://t1.daumcdn.net/cfile/blog/9969FF3E5AE36C2A14",
    "rating": 4.2
  }
]

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} image={dish.src} rate={dish.rating}/>;
}

function App() {
  return (
    <div className="App">
      {FoodILike.map(renderFood)};
    </div>
  );
}

export default App;

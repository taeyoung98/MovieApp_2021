import React from "react";

function Food({name, image}){
  return (
  <>
  <h1>{name} is delicious!</h1>
  <img src={image} alt="food"/>
  </>
  )
}

const FoodILike = [
  {
    "name": "lamyeon",
    "src": "https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2020/05/23/20200523000093_0.jpg"
  },
  {
    "name": "ram on a skewer",
    "src": "https://t1.daumcdn.net/cfile/blog/9969FF3E5AE36C2A14"
  }
]

function App() {
  return (
    <div className="App">
      {FoodILike.map(dish => <Food name={dish.name} image={dish.src} />)}
    </div>
  );
}

export default App;

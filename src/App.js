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

/**
 ** function component -> return -> screen
 ** class component -(automatically)react component-> render method -> screen
 */

// function App() {
//   return (
//     <div className="App">
//       {FoodILike.map(renderFood)};
//     </div>
//   );
// }

class App extends React.Component {
  state = { // object
    // Data will change
    count: 0
  }
  add = () => {
    // console.log("add");
    
    // if setState() 사용X -> 새"NEW" state와 함께 render function 호출X
    // this.state.count += 1; // 직접 접근 불가
    // this.setState({count: this.state.count+1});
    
    // function 방식으로 현재 state 가져오기 : state를 set할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
    this.setState(currnet => ({count: currnet.count+1}));
  };
  minus = () => {
    this.setState(currnet => ({count: currnet.count-1}));
  }; 
  render(){
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        {/* () means 'immediately */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

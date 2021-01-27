import React from "react";
import axios from "axios";

class App extends React.Component {
  state = { // future state is not required. 
    isLoading: true, // just plan
    movies: []
  };
  getMovies = () => {
    const movies = axios.get("https:/yts-proxy.now.sh/list_movies.json");

  }
  // async: "javascript에게 componentDidMount 함수가 끝날 때까지 약간 시간이 걸릴 수 있다"고 전달
  async componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;

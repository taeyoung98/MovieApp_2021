import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = { // future state is not required. 
    isLoading: true, // just plan
    movies: []
  };
  // async(hronous): "javascript에게 getMovies 함수가 끝날 때까지 약간 시간이 걸릴 수 있다"고 전달 == 비동기
  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https:/yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading" : movies.map(movie => (
      <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
    ))}</div>;
  }
}

export default App;

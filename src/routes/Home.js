import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// react-router-dom: a package that makes a navigation

// Hook is a different way.
// not old. not alternative.
class Home extends React.Component {
  state = { // future state is not required. 
    isLoading: true, // just plan
    movies: []
  };
  // async(hronous): "javascript에게 getMovies 함수가 끝날 때까지 약간 시간이 걸릴 수 있다"고 전달 == 비동기
  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
        ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
              key={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres} />
          ))}
        </div>
        )
      }
      </section>
    );
  }
}

export default Home;
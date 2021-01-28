import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// component가 state가 필요 없을 경우에는 class component가 될 필요X
function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            {/* <label htmlFor= //in js, 'for' means loop */}
            <img src={poster} alt={title} title={title} />
            <div className="movies__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                {/* map function gives another argument. 
                  * one is a current item and the other is item number. 
                  * you can set item number whatever you want. */}
                <ul className="movie__genres"> 
                    {genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.protoTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
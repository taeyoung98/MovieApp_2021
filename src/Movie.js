import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// component가 state가 필요 없을 경우에는 class component가 될 필요X
function Movie({year, title, summary, poster}){
    return (
        <div className="moves__movie">
            <img src={poster} alt={title} title={title} />
            <div className="moves__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>

                
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
    poster: PropTypes.string.isRequired
};

export default Movie;
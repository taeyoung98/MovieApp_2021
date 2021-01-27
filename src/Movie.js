import React from "react";
import PropTypes from "prop-types";

// component가 state가 필요 없을 경우에는 class component가 될 필요X
function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

Movie.protoTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;
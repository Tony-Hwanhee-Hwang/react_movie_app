import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
	return (
		<Link
			to={{
				pathname: "movie-details",
				state: {
					year,
					title,
					summary,
					poster,
					genres
				}
			}}>
			<div className='movie'>
				<img src={poster} alt={title} title={title} />
				<div className='movie__data'>
					<h3 className='movie__title'>{title}</h3>
					<h5 className='movie__year'>{year}</h5>
					<ul className='genres'>
						{genres.map((genre, idx) => (
							<li key={idx} className='genres__genre'>
								{genre}
							</li>
						))}
					</ul>
					<li>{summary.slice(0, 140)}...</li>
				</div>
			</div>
		</Link>
	);
}

Movie.prototype = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

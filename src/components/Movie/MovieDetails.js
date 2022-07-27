import React from 'react';
import PropTypes from 'prop-types';

import PlayIcon from '../../static/images/play-button.svg';
import ListButton from '../ListButton';

function MovieDetails({ movie }) {
  const runtimeDetail = movie.runtime || movie.episode_run_time;
  return (
    <div className="modal__container">
      <h1 className="modal__title">{movie.title || movie.name}</h1>
      <p className="modal__info">
        <span className="modal__rating">
          Rating: {movie.vote_average * 10}%{' '}
        </span>
        <span>Release date: {movie.release_date || movie.first_air_date}</span>
        {runtimeDetail ? <span> Runtime: {runtimeDetail}m</span> : null}
      </p>
      <p className="modal__episode">
        {movie.number_of_episodes
          ? ' Episodes: ' + movie.number_of_episodes
          : ''}
        {movie.number_of_seasons ? ' Seasons: ' + movie.number_of_seasons : ''}
      </p>
      <p className="modal__overview">{movie.overview}</p>
      <button className="modal__btn modal__btn--red">
        <PlayIcon className="modal__btn--icon" />
        Play
      </button>
      <ListButton
        movie={movie}
        buttonClassName="modal__btn"
        addClassName="modal__btn--icon"
        removeClassName="modal__btn--icon"
      />
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    runtime: PropTypes.string,
    episode_run_time: PropTypes.string,
    number_of_episodes: PropTypes.number,
    number_of_seasons: PropTypes.number,
    overview: PropTypes.string,
  }),
};
export default MovieDetails;

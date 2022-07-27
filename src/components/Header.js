import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addToList, removeFromList } from '../store/actions/index';

import PlayLogo from '../static/images/play-button.svg';
import AddLogo from '../static/images/add.svg';
import RemoveLogo from '../static/images/remove.svg';

function Header({ movie, list, addToList, removeFromList }) {
  const backgroundStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundPosition: 'center',
  };

  const handleButtonClick = (isCurrentIdAlreadyInList) => {
    if (isCurrentIdAlreadyInList) {
      return removeFromList(movie.id);
    }
    return addToList(movie.id);
  };

  const isIdInList = list.some((id) => id === movie.id);
  const buttonLogo = !isIdInList ? (
    <AddLogo className="header__container-btnMyList-add" />
  ) : (
    <RemoveLogo className="header__container-btnMyList-remove" />
  );

  return (
    <header style={backgroundStyle} className="header">
      <div className="header__container">
        <h1 className="header__container-heading">{movie.name}</h1>
        <button
          onClick={() => alert('not a movie!')}
          className="header__container-btnPlay"
        >
          <PlayLogo className="header__container-btnMyList-play" />
          Play
        </button>
        <button
          className="header__container-btnMyList"
          onClick={() => handleButtonClick(isIdInList)}
        >
          {buttonLogo}
          My List
        </button>
        <p className="header__container-overview">{movie.overview}</p>
      </div>
      <div className="header--fadeBottom"></div>
    </header>
  );
}

Header.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    overview: PropTypes.string,
    backdrop_path: PropTypes.string,
  }).isRequired,
  list: PropTypes.array.isRequired,
  addToList: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToList,
      removeFromList,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

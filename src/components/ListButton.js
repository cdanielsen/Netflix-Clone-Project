import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addToList, removeFromList } from '../store/actions/index';

import AddIcon from '../static/images/add.svg';
import RemoveIcon from '../static/images/remove.svg';

function ListButton({
  list,
  movie,
  addToList,
  removeFromList,
  buttonClassName,
  addClassName,
  removeClassName,
}) {
  const isIdInList = list.some((id) => id === movie.id);
  const handleButtonClick = (isIdInList) => {
    if (isIdInList) {
      return removeFromList(movie.id);
    }
    return addToList(movie.id);
  };

  const buttonLogo = !isIdInList ? (
    <AddIcon className={addClassName} />
  ) : (
    <RemoveIcon className={removeClassName} />
  );
  return (
    <button
      className={buttonClassName}
      onClick={() => handleButtonClick(isIdInList)}
    >
      {buttonLogo}
      My List
    </button>
  );
}

ListButton.propTypes = {
  list: PropTypes.arrayOf(PropTypes.number),
  buttonClassName: PropTypes.string.isRequired,
  addClassName: PropTypes.string.isRequired,
  removeClassName: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    overview: PropTypes.string,
    backdrop_path: PropTypes.string,
  }).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListButton);

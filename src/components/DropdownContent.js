import React from 'react';
import PropTypes from 'prop-types';

const DropdownContent = ({ isAvatarMenuOpen, handleAvatarMenuClick }) => {
  const userMenuStatus = isAvatarMenuOpen ? 'active' : '';
  return (
    <div className="dropdownContainer">
      <div
        className="navigation__container--userLogo"
        onClick={handleAvatarMenuClick}
      >
        <div className={`dropdownContent ${userMenuStatus}`}>
          <div>
            <div className="dropdownContent--user"></div>
            <p className="dropdownContent--user-text">Andres</p>
          </div>
          <div>
            <div className="dropdownContent--user dropdownContent--user-2"></div>
            <p className="dropdownContent--user-text">Tony</p>
          </div>
          <div>
            <div className="dropdownContent--user dropdownContent--user-3"></div>
            <p className="dropdownContent--user-text">Luis</p>
          </div>
          <p className="dropdownContent-text">Manage Profiles</p>
        </div>
        <div className="dropdownContent dropdownContent--2">
          <p className="dropdownContent-textOutside">Account</p>
          <p className="dropdownContent-textOutside">Help Center</p>
          <p className="dropdownContent-textOutside">Sign out of Netflix</p>
        </div>
      </div>
    </div>
  );
};

DropdownContent.propTypes = {
  isAvatarMenuOpen: PropTypes.bool.isRequired,
  handleAvatarMenuClick: PropTypes.func.isRequired,
};

export default DropdownContent;

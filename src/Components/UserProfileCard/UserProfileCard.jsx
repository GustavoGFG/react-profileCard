import React from 'react';
import './UserProfileCard.css';

export const UserProfileCard = ({ props }) => {
  return (
    <div className="user-profile-card">
      <div className="gradiant"></div>
      <div className="profile-down">
        <div className="profile-img-container">
          <img src={props.profileImage} alt="" />
        </div>
        <div className="profile-title">{props.profileName}</div>
        <div className="profile-description">{props.profileDescription}</div>

        <a className="profile-button" href="mailto:gd.gustavodev@gmail.com">
          Contact Me
        </a>
      </div>
    </div>
  );
};

import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './header.css';

const Header = ({children, currentWeather}) => {
  let date = new Date();
  return (<div className="header-container">
    <div className="first-header-section">
      <div className="header-title">
        <span className="header-title-text">Today's Todos
        </span>
      </div>
      <div className="date-container">
        <div className="header-current-date">
          <Moment format="D MMM YYYY" withTitle>
            {date}
          </Moment>
        </div>
      </div>
    </div>
  </div>)
}

export default Header;

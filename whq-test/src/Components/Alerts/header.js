import React from "react";
import settings from '../../assets/icons/settings.svg'
import down from '../../assets/icons/caret-down.svg'

const Header = () => {
  return (
      <section className = "alerts-header">
          <header className = "alerts-section">
        <div className = "alert-title">Recent Alerts</div>
        <div className = "alert-time">
          <div className = "time-title">Viewing Last 24 hours</div>
          <data>
            <img className = "pointer" src={down} alt="down icon" />
          </data>
        </div>
        </header>
        <data className = "settings-icon">
          <img className = "pointer" src={settings} alt="settings icon" />
        </data>
      </section>
  );
};

export default Header;
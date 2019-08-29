import React from "react";
import logo from "../../assets/logo.svg"
import user from "../../assets/icons/user.svg"
import notification from "../../assets/icons/notification.svg"

const Navbar = () => {
  return (
    <section className="navbar">
        <div className = "nav-container">
        <data>
            <img src={logo} alt="company logo" />
        </data>
        <div className = "options">
            <div className = "nav-link">Inventory</div>
            <div className = "nav-link">Devices</div>
            <div className = "nav-link">Recipes</div>
        </div>
        </div>
        <data className = "icons">
        <img className = "pointer" src={notification} alt="bell icon" />
        <img className = "pointer" src={user} alt="user icon" />
        </data>
    </section>
  );
};

export default Navbar;
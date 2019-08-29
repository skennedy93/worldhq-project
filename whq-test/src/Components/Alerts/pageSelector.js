import React from "react";
import down from '../../assets/icons/caret-down.svg'

const PageSelector = () => {
  return (
    <section className ="page-selector">
        <section className = "selector-container">
        <span className = "items">1-4 of
        <div className = "selected-page">2</div>
        </span>
        <span className = "items">1
        <div className = "selected-page">2</div>
        <data><img className = "side-carrot" src={down} alt="down icon" /></data>
        </span>
        </section>
    </section>
  );
};

export default PageSelector;
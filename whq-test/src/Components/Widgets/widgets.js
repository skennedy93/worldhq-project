import React from "react";
import bar from '../../assets/icons/bar-chart.svg'
import pie from '../../assets/icons/pie-chart.svg'
import trending from '../../assets/icons/trending-up.svg'


const Widgets = () => {
  return (
    <section className ="widgets">
      <div className = "widgets-column">
        <data className = "widgets-icons">
        <img src={bar} alt="bar icon" />
        <img src={pie} alt="pie icon" />
        <img src={trending} alt="trending icon" />
        </data>
        <div className = "button">Add Widget</div>
      </div>
    </section>
  );
};

export default Widgets;
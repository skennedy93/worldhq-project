import React from 'react';

// import ProjectImage from '../images/ProjectBlank.png';

const Sections = (props) => {
  return (
    <section className="sections">
      <h1 className={props.number === 0 ? "not-colored" : "colored"}>{ props.number }</h1>
      <div className = "column">
      <data className={props.number === 0 ? "not-colored" : "colored"}>{props.top}</data>
      <data className = "section-bottom">{props.bottom}</data>
      </div>
    </section>
  )
}

export default Sections;
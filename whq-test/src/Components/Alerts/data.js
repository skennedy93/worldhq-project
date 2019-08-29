import React from 'react';

const Data = (props) => {
  return (
    <section className="sections">
      <h1 className={props.number === 0 ? "not-colored" : "colored"}>{ props.number }</h1>
      <div className = "alerts-column">
      <data className={props.number === 0 ? "not-colored" : "colored"}>{props.top}</data>
      <data className = "section-bottom">{props.bottom}</data>
      </div>
    </section>
  )
}

export default Data;
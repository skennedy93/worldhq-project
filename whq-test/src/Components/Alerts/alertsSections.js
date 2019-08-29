import React from "react";
import Data from "./data"

const sections = [
    {
      id: 1,
      top:"Two stores failed to send",
      number: 2
    },
    {
      id: 2,
      top:"Scales failed to communicate",
      number: 0
    },
  ];

const AlertsSections = () => {
  return (

    <section className = "alert-row">
      {sections.map(section=> {
              return <Data
                key={section.id}
                top={section.top}
                number={section.number}
              />
            })}
        </section>

  );
};

export default AlertsSections;
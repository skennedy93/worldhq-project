import React from "react";
import Sections from './highlightsSections'
import settings from '../../assets/icons/settings.svg'
const sections = [
  {
    id: 1,
    top:"Scales with no labeling",
    bottom:"Last 12 hours",
    number:8
  },
  {
    id: 2,
    top:"Scales close to memory capacity",
    bottom:"Within 70%",
    number: 0
  },
  {
    id: 3,
    top:"Device firmware discrepencies",
    bottom:"",
    number: 0
  },
  {
    id: 4,
    top:"Network test problems",
    bottom:"Last run 15m ago",
    number: 3
  },
];

const Highlights = () => {
  return (
    <section className ="highlights">
      <header className = "highlights-header">
      <div className = "highlights-title">Device Highlights</div>
      <img className = "pointer" src={settings} alt="settings icon" />
      </header>
      <data className = "row">
      {sections.map(section=> {
              return <Sections
                key={section.id}
                top={section.top}
                bottom={section.bottom}
                number={section.number}
              />
            })}
        </data>
        </section>   
  );
};

export default Highlights;
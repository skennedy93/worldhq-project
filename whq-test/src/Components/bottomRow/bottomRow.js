import React from "react";
import Alerts from "../Alerts/alerts";
import Widgets from "../Widgets/widgets";

const BottomRow = () => {
  return (
    <section className ="bottom-row">
        <Alerts/>
        <Widgets/>
    </section>
  );
};

export default BottomRow;
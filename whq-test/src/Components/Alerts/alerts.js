import React from "react";
import Header from "./header";
import AlertsSections from "./alertsSections";
import Table from "./table";
import PageSelector from "./pageSelector";


const Alerts = () => {
  return (
    <section className ="alerts">
      <Header/>
      <AlertsSections/>
      <Table/>
      <PageSelector/>
    </section>
  );
};

export default Alerts;
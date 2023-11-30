import React from "react";
import ContactForm from "../../components/stats/ContactForm";
import { Fragment } from "react";

import ChartComp from "../../components/stats/ChartComp";
function statistics() {
  
  return (
    <Fragment>
      <ChartComp />
      <ContactForm />
    </Fragment>
  );
}

export default statistics;

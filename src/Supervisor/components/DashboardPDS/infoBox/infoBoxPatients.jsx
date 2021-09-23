import React from "react";
import { container, box, flex_container } from "./info.module.scss";
import dashboard_all_patients from "../Charts/patientGraphData";

const InfoboxPatients = () => {
  const num_of_patients = dashboard_all_patients.num_of_patients;

  return (
    <div className={container}>
      <div className={flex_container}>
        <div className={box}>
          <p>Número de pacientes</p>
          <h2>{num_of_patients}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoboxPatients;

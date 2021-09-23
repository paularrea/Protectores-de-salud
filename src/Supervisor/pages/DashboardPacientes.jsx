import React from "react";
import styles from "../styles/dashboardPDS.module.scss";
import dashboard_all_patients from "../components/DashboardPDS/Charts/patientGraphData";
import Chart from "../components/DashboardPDS/Charts/Chart";
import PatientTableList from "../components/DashboardPDS/Tables/PatientTableList";
import InfoboxPatients from "../components/DashboardPDS/infoBox/infoBoxPatients";

const DashboardPacientes = () => {
  const last_date = dashboard_all_patients.last_date;
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <p>Dashboard</p>
          <h1>Pacientes</h1>
          <p className={styles.date}>Último día completado: {last_date}</p>
        </div>
      <InfoboxPatients/>
      </div>

      {dashboard_all_patients.plots.map((graph) => {
        return (
          <Chart
            values={graph.values}
            title={graph.title}
            line={graph.line}
            XLabel={graph.X_label}
            YLabel={graph.Y_label}
          />
        );
      })}
      <PatientTableList/>
    </div>
  );
};

export default DashboardPacientes;

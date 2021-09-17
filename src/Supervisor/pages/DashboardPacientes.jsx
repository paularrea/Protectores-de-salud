import React from "react";
import styles from "../styles/dashboardPDS.module.scss";
import dashboards_community_workers from "../components/DashboardPDS/Charts/graphData";
import Chart from "../components/DashboardPDS/Charts/Chart";
import Infobox from "../components/DashboardPDS/infoBox/Infobox";
import PatientTableList from "../components/DashboardPDS/Tables/PatientTableList";

const DashboardPacientes = () => {
  const last_date = dashboards_community_workers.last_date;
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <p>Dashboard</p>
          <h1>Pacientes</h1>
          <p className={styles.date}>Último día completado: {last_date}</p>
        </div>
        <Infobox />
      </div>

      {dashboards_community_workers.plots.map((graph) => {
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

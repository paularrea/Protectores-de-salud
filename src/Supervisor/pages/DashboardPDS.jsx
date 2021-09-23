import React from "react";
import styles from "../styles/dashboardPDS.module.scss";
import dashboards_community_workers from "../components/DashboardPDS/Charts/pdsGraphData";
import Chart from "../components/DashboardPDS/Charts/Chart";
import Infobox from "../components/DashboardPDS/infoBox/Infobox";
import PdsTableList from "../components/DashboardPDS/Tables/PdsTableList";

const DashboardPDS = () => {
  const last_date = dashboards_community_workers.last_date;
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <p>Dashboard</p>
          <h1>Protectores de Salud</h1>
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
      <PdsTableList/>
    </div>
  );
};

export default DashboardPDS;

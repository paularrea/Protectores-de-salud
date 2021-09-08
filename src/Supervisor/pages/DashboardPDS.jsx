import React from "react";
import styles from "../styles/dashboardPDS.module.scss";
import data from "../components/DashboardPDS/Charts/graphData";
import Chart from "../components/DashboardPDS/Charts/Chart";

const DashboardPDS = () => {
  return (
    <div className={styles.container}>
      <h1>Protectores de Salud</h1>
      {data.map((graph) => {
        return <Chart values={graph.values} name={graph.name} />;
      })}
    </div>
  );
};

export default DashboardPDS;

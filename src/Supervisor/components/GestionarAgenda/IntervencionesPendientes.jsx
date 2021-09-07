import React from "react";
import { Link } from "react-router-dom";
import styles from "./intervenciones-pendientes.module.scss";
import SuggestionTable from "./components/SuggestionTable";

const IntervencionesPendientes = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.goback} to="/gestionar-agenda">
        {`<-`} Volver
      </Link>
      <div className={styles.title}>
        <h2>Intervenciones pendientes de confirmar</h2>
        <div className={styles.total}>
          <p>
            Intervenciones pendientes <br /> (total)
          </p>
          <h1>231</h1>
        </div>
      </div>
      <div className={styles.table}>
        <SuggestionTable />
      </div>
    </div>
  );
};

export default IntervencionesPendientes;

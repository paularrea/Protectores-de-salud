import React from "react";
import styles from "./intervenciones-pendientes.module.scss";
import SuggestionTable from "./components/SuggestionTable/SuggestionTable";
import pendingEvents from "./components/SuggestionTable/pendingEvents";


const IntervencionesPendientes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Intervenciones pendientes <br /> de confirmar</h2>
        <div className={styles.total}>
          <p>
            Intervenciones pendientes <br /> (total)
          </p>
          <h1>{pendingEvents.length}</h1>
        </div>
      </div>
      <div className={styles.table}>
        <SuggestionTable />
      </div>
    </div>
  );
};

export default IntervencionesPendientes;

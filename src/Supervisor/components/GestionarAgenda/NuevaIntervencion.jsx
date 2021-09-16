import React from "react";
import styles from "./agenda.module.scss";
import NewInterventionForm from "./components/NewInterventionForm/NewInterventionForm";

const NuevaIntervencion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dropdown_container}>
        <h2>Crear nueva intervención</h2>
        <p>
          Inicia el proceso de <b>creación de una nueva intervención</b> para un
          paciente o PDS.
        </p>
      </div>
      <div className={styles.agenda}>
        <h4>Nueva intervención</h4>
        <div className="container-mobile" style={{height:'auto'}}>
          <NewInterventionForm />
        </div>
      </div>
    </div>
  );
};

export default NuevaIntervencion;

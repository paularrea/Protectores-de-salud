import React from "react";
import { Link } from "react-router-dom";
import styles from "./agenda.module.scss"

const NuevaIntervencion = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.goback} to="/gestionar-agenda">{`<-`} Volver</Link>
      <div className={styles.dropdown_container}>
        <h2>Crear nueva intervención</h2>
        <p>Inicia el proceso de <b>creación de una nueva intervención</b> para un paciente o PDS.
        </p>
      </div>
      <div className={styles.agenda}>
        <h4>Nueva intervención</h4>
        <div className='container-mobile'>
          <p>Selecciona un PDS o Paciente para acceder a su agenda.</p>
        </div>
      </div>
    </div>
  );
};

export default NuevaIntervencion;

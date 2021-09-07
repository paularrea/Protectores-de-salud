import React from "react";
import { Link } from "react-router-dom";
import styles from "./agenda.module.scss"

const Agenda = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.goback} to="/gestionar-agenda">{`<-`} Volver</Link>
      <div className={styles.dropdown_container}>
        <h2>Ver agenda</h2>
        <p>Selecciona la agenda de un Protector de Salud o un Paciente</p>
        <span>Dropdown PDS</span>
        <span>Dropdown pacientes</span>
      </div>
      <div className={styles.agenda}>
        <h4>Próximas intervenciones</h4>
        <div className='container-mobile'>
          <p>Selecciona un PDS o Paciente para acceder a su agenda.</p>
        </div>
      </div>
    </div>
  );
};

export default Agenda;

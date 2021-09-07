import React from "react";
import { Link } from "react-router-dom";
import agendaImg from "../../img/supervisor/admin-agenda.png";
import suggestImg from "../../img/supervisor/admin-suggestions.png";
import newImg from "../../img/supervisor/admin-new.png";
import styles from "../styles/gestionarAgenda.module.scss";

const GestionarAgenda = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={agendaImg} alt="" />
        <h2>Ver agendas</h2>
        <p>Selecciona la agenda de un Protector de Salud o un Paciente</p>
        <Link to="/gestionar-agenda/agenda">
          <button className="blue_button">Ver agendas</button>
        </Link>
      </div>

      <div>
        <img src={suggestImg} alt="" />
        <h2>Intervenciones pendientes de confirmar</h2>
        <p>
          Tienes <b>54 intervenciones pendientes para hoy</b> de un total de 231
        </p>
        <Link to="/gestionar-agenda/intervenciones-pendientes">
          <button className="blue_button">Ver intervenciones pendientes</button>
        </Link>
      </div>

      <div>
        <img src={newImg} alt="" />
        <h2>Crear nueva intervención</h2>
        <p>
          Inicia el proceso de <b>creación de una nueva intervención</b> para un
          paciente o PDS
        </p>
        <Link to="/gestionar-agenda/nueva-intervencion">
          <button className="blue_button">Añadir nueva intervención</button>
        </Link>
      </div>
    </div>
  );
};

export default GestionarAgenda;

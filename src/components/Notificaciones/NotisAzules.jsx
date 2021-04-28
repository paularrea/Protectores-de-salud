import React from "react";
import styles from "./notificaciones.module.scss";
import alert from "../../img/alert.png"

const NotisAzules = () => {
  return (
    <div
      style={{ backgroundColor: "#4283f332", borderLeft:'2px solid #4284F3' }} 
      className={styles.notificaciones_container}
    >
      <p>
        Ya tienes disponible el <a href="">resumen</a> de tus intervenciones de
        la semana pasada.
      </p>
      <a href="">Ok, entendido.</a>
      <div className={styles.icon}><img src={alert} alt=""/></div>
    </div>
  );
};

export default NotisAzules;

import React from "react";
import Notifications from "../components/inicio/notifications";
// import { useLocation } from "react-router-dom";
import styles from "../styles/inicio.module.scss";

const Inicio = () => {
  //   const location = useLocation();
  //   const user = location.state.username;

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <h1>Hola Pau</h1>
        <p className={styles.welcome_p}>Bienvenido a tu espacio de trabajo</p>
      </div>
      <div className={styles.flex}>
        <Notifications />
      </div>
    </div>
  );
};

export default Inicio;

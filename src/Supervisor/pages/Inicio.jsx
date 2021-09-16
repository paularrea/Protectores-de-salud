import React from "react";
// import { useLocation } from "react-router-dom";
import styles from "../styles/inicio.module.scss";

const Inicio = () => {
//   const location = useLocation();
//   const user = location.state.username;

  return (
    <div className={styles.container}>
      <h1>Hola Pau</h1>
      <p>Bienvenido a tu espacio de trabajo</p>
    </div>
  );
};

export default Inicio;

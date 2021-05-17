import React from "react";
import styles from "../styles/recuperar.module.scss";

const RecuperarContra = () => {
  return (
    <div className="container-mobile">
      <div className={styles.container}>
        <div>
          <h2>Recuperar contraseña</h2>
          <p>
            Las instrucciones para recuperar tu contraseña han sido enviadas al
            correo electrónico j*****@gmail.com
          </p>
          <a className="link" href="/">Volver al login</a>
        </div>
      </div>
    </div>
  );
};

export default RecuperarContra;

import React, { useState } from "react";
import styles from "../../../components/Notifications/notificaciones.module.scss";
import campana from "../../../img/campana.png";
import alert from "../../../img/alert.png";

const Notifications = () => {
  const [closeBlue, setCloseBlue] = useState(false);
  const [closeRed, setCloseRed] = useState(false);

  const onClickBlue = () => {
    setCloseBlue(true);
  };

  const onClickRed = () => {
    setCloseRed(true);
  };

  return (
    <div>
      {!closeRed && (
        <div
          style={{
            backgroundColor: "#FFF2F7",
            borderLeft: "2px solid #FF2E79",
          }}
          className={styles.notificaciones_container}
        >
          <p>Tienes 5 intervenciones pendientes de confirmación</p>
          <button onClick={onClickRed} className="link">
            Ok, entendido.
          </button>
          <div className={styles.icon}>
            <img src={campana} alt="" />
          </div>
        </div>
      )}

      {!closeBlue && (
        <div
          style={{
            backgroundColor: "#F3F8FF",
            borderLeft: "2px solid #2E83F8",
          }}
          className={styles.notificaciones_container}
        >
          <p>Ya puedes descargar tu informe del mes pasado</p>
          <button onClick={onClickBlue} className="link">
            Ok, entendido.
          </button>
          <div className={styles.icon}>
            <img src={alert} alt="" />
          </div>
        </div>
      )}
      <div style={{ marginTop: "2rem" }}>
        {closeBlue && closeRed && (
          <p style={{ color: "gray", fontStyle: "italic" }}>
            No tienes nuevas notificaciones
          </p>
        )}
      </div>
    </div>
  );
};

export default Notifications;

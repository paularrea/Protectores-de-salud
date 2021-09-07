import React from "react";
import styles from "./form.module.scss";
import notiStyles from "../Notifications/notificaciones.module.scss";
import campana from "../../img/campana.png";
import step5 from "../../img/steps/step5.png";

const Step5 = (props) => {
  return (
    <div className={styles.container}>
      <div
        ref={props.topRef}
        style={{ paddingTop: "2rem" }}
        className={styles.content}
      >
        <div className={styles.noti_content}>
          <div
            style={{
              backgroundColor: "#FFF2F7",
              borderLeft: "2px solid #FF2E79",
              margin: 0,
              marginTop: "2rem",
            }}
            className={notiStyles.notificaciones_container}
          >
            <p style={{ padding: 0 }}>
              AVISO: Si acepta, la intervención se dará por finalizada y ya no
              podrá modificar la información introducida.
            </p>
            <div className={notiStyles.icon}>
              <img src={campana} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Step5.label = "Finalizar Intervención y Enviar";

Step5.Img = step5;

export default Step5;

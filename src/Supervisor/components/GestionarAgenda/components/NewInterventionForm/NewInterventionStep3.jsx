import React from "react";
import styles from "../../../../../styles/form.module.scss";
import notiStyles from "../../../../../components/Notifications/notificaciones.module.scss";
import campana from "../../../../../img/campana.png";
import step2 from "../../../../../img/steps/suggestion-step3.png";

const NewInterventionStep2 = (props) => {
  return (
    <div className={styles.container}>
      <div
        ref={props.refProp}
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
              AVISO: Si acepta, la nueva intervención se dará por finalizada y ya no
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

NewInterventionStep2.label = "Finalizar y Enviar";

NewInterventionStep2.Img = step2;

export default NewInterventionStep2;

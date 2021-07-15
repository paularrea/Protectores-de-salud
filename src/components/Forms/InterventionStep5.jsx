import React from "react";
import { Checkboxes } from "mui-rff";
import styles from "./form.module.scss";
import step5 from "../../img/steps/step6.png";
import notiStyles from "../Notifications/notificaciones.module.scss";
import campana from "../../img/campana.png";

function Step5(props) {
  if (props.step !== 5) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.fixed_header}>
        <div className={styles.header}>
          <div>
            <img src={step5} alt="Step5" />
            <p>PASO {props.step}</p>
            <h2>Finalizar Intervención y Enviar</h2>
          </div>
        </div>
      </div>
      <div
        ref={props.topRef}
        style={{ paddingTop: "2rem" }}
        className={styles.content}
      >
        <Checkboxes
          color="primary"
          name="submit_form"
          formControlProps={{ margin: "none" }}
          fieldProps={{validate: props.required('Rellena este campo para finalizar y enviar la intervención')}}
          formGroupProps={{ row: false }}
          data={{
            label: "Estoy conforme y quiero finalizar el proceso",
            value: true,
          }}
        />

        <div className={styles.noti_content}>
          <div
            style={{
              backgroundColor: "#FFF2F7",
              borderLeft: "2px solid #FF2E79",
              margin: 0,
            }}
            className={notiStyles.notificaciones_container}
          >
            <p>
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
}
export default Step5;

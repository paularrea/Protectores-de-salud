import React from "react";
import * as Yup from "yup";
import styles from "./form.module.scss";
import { Field, ErrorMessage } from "formik";
import notiStyles from "../Notifications/notificaciones.module.scss";
import campana from "../../img/campana.png";
import step2 from "../../img/steps/evaluation-step2.png";

const EvaluationStep2 = (props) => {
  return (
    <div className={styles.container}>
      <div
        ref={props.refProp}
        style={{ paddingTop: "2rem" }}
        className={styles.content}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ErrorMessage
            name="acceptAndSent"
            component="div"
            className={styles.error_message}
          />
        </div>
        <label
          style={{
            cursor: "pointer",
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          <Field
            style={{
              cursor: "pointer",
              margin: "1rem",
              marginLeft: 0,
              width: "16px",
              height: "16px",
            }}
            type="checkbox"
            name="acceptAndSent"
          />
          Estoy conforme y quiero finalizar el proceso
        </label>
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
              AVISO: Si acepta, la evaluación se dará por finalizada y ya no
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

EvaluationStep2.label = "Finalizar Intervención y Enviar";

EvaluationStep2.validationSchema = Yup.object().shape({
  acceptAndSent: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
});

EvaluationStep2.Img = step2;

export default EvaluationStep2;

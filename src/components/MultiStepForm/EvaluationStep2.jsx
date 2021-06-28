import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import evaluationStep2 from "../../img/steps/step6.png";
import notiStyles from "../Notificaciones/notificaciones.module.scss";
import { FormControl, FormControlLabel, Checkbox } from "@material-ui/core";
import campana from "../../img/campana.png";

function EvaluationStep2(props) {
  if (props.step !== 2) {
    return null;
  }
  return (
    <div className={styles.container}>
            <div className={styles.fixed_header}>
      <div className={styles.header}>
        <div>
          <img src={evaluationStep2} alt="EvaluationStep2" />
          <p>PASO {props.step}</p>
          <h2>Finalizar Intervención y Enviar</h2>
        </div>
        </div>
      </div>
      <Form name="Step5" {...props}>
        <div ref={props.topRef} style={{ paddingTop: "2rem" }} className={styles.content}>
          <FormControl component="fieldset">
            <FormControlLabel
              control={
                <Checkbox
                  name="Estoy conforme y quiero finalizar el proceso"
                  color="primary"
                />
              }
              label="Estoy conforme y quiero finalizar el proceso."
            />
          </FormControl>
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
      </Form>
    </div>
  );
}
export default EvaluationStep2;

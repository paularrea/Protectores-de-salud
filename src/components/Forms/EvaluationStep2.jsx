import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import evaluationStep2 from "../../img/steps/step6.png";
import notiStyles from "../Notifications/notificaciones.module.scss";
import { FormControl, FormControlLabel, Checkbox } from "@material-ui/core";
import campana from "../../img/campana.png";
import { useState } from "react";

function EvaluationStep2(props) {
  const [checked, setChecked] = useState(false);
  if (props.step !== 2) {
    return null;
  }
  console.log(props, 'pppppp')
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
      <Form name="evaluationStep2" {...props}>
        <div
          ref={props.topRef}
          style={{ paddingTop: "2rem" }}
          className={styles.content}
        >
          <FormControl component="fieldset">
            <FormControlLabel
              control={
                <Checkbox
                  name="Estoy conforme y quiero finalizar el proceso"
                  color="primary"
                  onChange={() => setChecked(true)}
                  value={checked && "Yes"}
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
                AVISO: Si acepta, la evaluación se dará por finalizada y ya no
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

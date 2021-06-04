import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import step6 from "../../img/steps/step6.png";
import notiStyles from "../Notificaciones/notificaciones.module.scss";
import Checkbox from "./components/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import campana from "../../img/campana.png";

function Step6(props) {
  if (props.step !== 6) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={step6} alt="step6" />
          <p>PASO {props.step}</p>
          <h2>Finalizar Intervención y Enviar</h2>
        </div>
      </div>
      <Form name="Step5" {...props}>
        <div style={{ paddingTop: "2rem", }} className={styles.content}>
          <FormControl component="fieldset">
            <Checkbox
              name="Estoy conforme y quiero finalizar el proceso"
              label="Estoy conforme y quiero finalizar el proceso."
            />
          </FormControl>
        </div>
        <div className={styles.noti_content}>
          <div
            style={{
              backgroundColor: "#FFF2F7",
              borderLeft: "2px solid #FF2E79",
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
      </Form>
    </div>
  );
}
export default Step6;

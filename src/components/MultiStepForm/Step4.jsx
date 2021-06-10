import React from "react";
import { Form } from "usetheform";
import step4 from "../../img/steps/step4.png";
import styles from "./form.module.scss";

function Step4(props) {
  if (props.step !== 4) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={step4} alt="step4" />
          <p>PASO {props.step}</p>
          <h2>Conformidad Paciente</h2>
        </div>
      </div>
      <Form name="Step4" {...props}>
        <div className={styles.legal_container}>
          <p className={styles.grey_text}>
            Por favor, lea atentamente este texto legal y firme si está
            conforme.
          </p>
          <div>
            <h4>
              CERTIFICACIÓN VALIDANDO INTERVENCIÓN/SERVICIO DE PROTECTOR DE
              SALUD
            </h4>
            <p>
              Certifico que, (NOMBRE), representante de Protectores de Salud,
              completó intervención durante (FECHA). Certifico que representante
              presentó su identificación y que la información brindada por mí es
              veraz y completa de acuerdo a mi mejor conocimiento y sin que haya
              mediado coacción o intimidación de clase alguna.
            </p>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Step4;

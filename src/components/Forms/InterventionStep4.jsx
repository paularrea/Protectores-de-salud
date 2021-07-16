import React, { useContext } from "react";
import { UserContext } from "../../UserContext.js";
import PatientConfirmationSignature from "../DigitalSignature/PatientConfirmationSignature";
import styles from "./form.module.scss";
import step4 from "../../img/steps/step4.png"

const Step4 = (props) => {
  const { contextUser } = useContext(UserContext);
  const name = contextUser && contextUser.supervisor_name;
  const date =
    props.patientDate.split(",")[1] + props.patientDate.split(",")[2];

  return (
    <>
      <div className={styles.container}>
        <div ref={props.refProp} className={styles.legal_container}>
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
              Certifico que, {name}, representante de Protectores de Salud,
              completó intervención durante el {date}. Certifico que
              representante presentó su identificación y que la información
              brindada por mí es veraz y completa de acuerdo a mi mejor
              conocimiento y sin que haya mediado coacción o intimidación de
              clase alguna.
            </p>
          </div>
          <PatientConfirmationSignature
            setIsConfirmationSigned={props.setIsConfirmationSigned}
            confirmationSign={props.confirmationSign}
            setConfirmationSign={props.setConfirmationSign}
          />
        </div>
      </div>
    </>
  );
};

Step4.label = "Conformidad Paciente";

Step4.Img = step4

export default Step4;

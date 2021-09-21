import React from "react";
// import { UserContext } from "../../UserContext.js";
import PatientConfirmationSignature from "../DigitalSignature/PatientConfirmationSignature";
import styles from "./form.module.scss";
import step4 from "../../img/steps/step4.png"

const Step4 = (props) => {
  // const { contextUser } = useContext(UserContext);
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();
  
  date = yyyy + '-' + mm + '-' + dd;

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
              CERTIFICACIÓN/VALIDACIÓN DE LA INTERVENCIÓN/SERVICIO DE PROTECTOR DE
              SALUD
            </h4>
            <p>
              Certifico que el/la representante de Protectores de Salud
              completó la intervención en fecha {date}. Certifico que este/a
              presentó su identificación y que la información
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

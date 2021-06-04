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
            <h5>Sección 1</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              condimentum nibh vel purus ultricies faucibus. Ut felis lacus,
              cursus non tristique sed, vestibulum ut purus. In at vestibulum
              enim, non consectetur nulla. Fusce ullamcorper quam in nibh
              dignissim interdum. Etiam vel pulvinar dolor. Donec fermentum
              dignissim enim id suscipit. Proin ipsum eros, volutpat ac lacus
              eget, laoreet commodo ante. Vivamus placerat eget urna at
              elementum. Fusce nisi sapien, commodo et suscipit eu, bibendum a
              mi.
            </p>
            <h5>Sección 2</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              condimentum nibh vel purus ultricies faucibus. Ut felis lacus,
              cursus non tristique sed, vestibulum ut purus. In at vestibulum
              enim, non consectetur nulla. Fusce ullamcorper quam in nibh
              dignissim interdum. Etiam vel pulvinar dolor. Donec fermentum
              dignissim enim id suscipit. Proin ipsum eros, volutpat ac lacus
              eget, laoreet commodo ante. Vivamus placerat eget urna at
              elementum. Fusce nisi sapien, commodo et suscipit eu, bibendum a
              mi.
            </p>
            <h5>Sección 3</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              condimentum nibh vel purus ultricies faucibus. Ut felis lacus,
              cursus non tristique sed, vestibulum ut purus. In at vestibulum
              enim, non consectetur nulla. Fusce ullamcorper quam in nibh
              dignissim interdum. Etiam vel pulvinar dolor. Donec fermentum
              dignissim enim id suscipit. Proin ipsum eros, volutpat ac lacus
              eget, laoreet commodo ante. Vivamus placerat eget urna at
              elementum. Fusce nisi sapien, commodo et suscipit eu, bibendum a
              mi.
            </p>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Step4;

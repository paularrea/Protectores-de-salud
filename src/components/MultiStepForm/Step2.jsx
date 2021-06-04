import React from "react";
import { Form } from "usetheform";
import step2 from "../../img/steps/step2.png"
import styles from "./form.module.scss";

function Step2({ prevPage, ...props }) {
  if (props.step !== 2) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <img src={step2} alt="step2" />
      <p>PASO {props.step}</p>
        <h2>Aceptación programa PDS</h2>
      </div>
      <Form name="Step2" {...props}>
      <div className={styles.legal_container}>
        <p className={styles.grey_text}>
          Por favor, lea atentamente este texto legal y firme si está conforme.
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
            eget, laoreet commodo ante. Vivamus placerat eget urna at elementum.
            Fusce nisi sapien, commodo et suscipit eu, bibendum a mi.
          </p>
          <h5>Sección 2</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            condimentum nibh vel purus ultricies faucibus. Ut felis lacus,
            cursus non tristique sed, vestibulum ut purus. In at vestibulum
            enim, non consectetur nulla. Fusce ullamcorper quam in nibh
            dignissim interdum. Etiam vel pulvinar dolor. Donec fermentum
            dignissim enim id suscipit. Proin ipsum eros, volutpat ac lacus
            eget, laoreet commodo ante. Vivamus placerat eget urna at elementum.
            Fusce nisi sapien, commodo et suscipit eu, bibendum a mi.
          </p>
          <h5>Sección 3</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            condimentum nibh vel purus ultricies faucibus. Ut felis lacus,
            cursus non tristique sed, vestibulum ut purus. In at vestibulum
            enim, non consectetur nulla. Fusce ullamcorper quam in nibh
            dignissim interdum. Etiam vel pulvinar dolor. Donec fermentum
            dignissim enim id suscipit. Proin ipsum eros, volutpat ac lacus
            eget, laoreet commodo ante. Vivamus placerat eget urna at elementum.
            Fusce nisi sapien, commodo et suscipit eu, bibendum a mi.
          </p>
        </div>
      </div>
      </Form>
    </div>
  );
}

export default Step2;

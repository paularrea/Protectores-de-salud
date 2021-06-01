import React from "react";
import { Form } from "usetheform";
import styles from "./form.module.scss";
import Checkbox from "./components/Checkbox";
import FormControl from "@material-ui/core/FormControl";

function Step6(props) {
  if (props.step !== 6) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>PASO {props.step}</p>
        <h2>Evaluación de la intervención</h2>
      </div>
      <Form name="Step5" {...props}>
      <div className={styles.content}>
        <FormControl component="fieldset">
          <Checkbox
            name="Estoy conforme y quiero finalizar el proceso"
            label="Estoy conforme y quiero finalizar el proceso."
          />
        </FormControl>
      </div>
      </Form>
    </div>
  );
}
export default Step6;

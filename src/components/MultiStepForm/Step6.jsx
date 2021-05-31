import React, { useState, useEffect } from "react";
import styles from "./form.module.scss";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";

function Step6(props) {
  const [value, setValue] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (props.currentStep !== 6) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>PASO {props.currentStep}</p>
        <h2>Evaluación de la intervención</h2>
      </div>
      <div className={styles.content}>
        <FormControl className={styles.lastCheckbox} id="conforme-finalizar" component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  value={value}
                  selected={value}
                  name="Estoy conforme y quiero finalizar el proceso."
                />
              }
              label="Estoy conforme y quiero finalizar el proceso."
            />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}
export default Step6;

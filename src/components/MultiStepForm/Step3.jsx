import React, {useState} from "react";
import styles from "./form.module.scss";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Step3(props) {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (props.currentStep !== 3) {
    return null;
  }

  const questionaryData = props.questionaryData && props.questionaryData

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>PASO {props.currentStep}</p>
        <h2>Cuestionario</h2>
      </div>
      <div className={styles.content}>
        <section>
          <h3>{questionaryData[0].chapter_name}</h3>
          <p>{questionaryData[0].question_content}</p>
          <RadioGroup aria-label="seguro-medico" name="seguro-medico" value={value} onChange={handleChange}>
        <FormControlLabel value="Sí" control={<Radio color="primary" />} label="Sí" />
        <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
        <FormControlLabel value="No sabe" control={<Radio color="primary" />} label="No sabe" />
      </RadioGroup>
        </section>
      </div>
    </div>
  );
}

export default Step3;

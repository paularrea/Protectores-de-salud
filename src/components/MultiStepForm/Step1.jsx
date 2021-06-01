import React from "react";
import { Form } from "usetheform";
import "./form.css";
import styles from "./form.module.scss";
import TextField from "./components/TextField";

const Step1 = ({ prevPage, ...props }) => {
  if (props.step !== 1) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <p>PASO {props.step}</p>
        <h2>Verificar datos personales</h2>
      </div>
      <div className={styles.form_content}>
        <Form name="Step1" {...props}>
          <div className={styles.content}>
            <TextField
              label="Primer Nombre"
              variant="outlined"
              name="firstName"
              type="text"
            />
            <TextField
              label="Segundo Nombre"
              variant="outlined"
              name="middleName"
              type="text"
            />
            <TextField
              label="Primer Apellido"
              variant="outlined"
              name="lastName"
              type="text"
            />
            <TextField
              label="Segundo Apellido"
              variant="outlined"
              name="secondLastName"
              type="text"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Step1;

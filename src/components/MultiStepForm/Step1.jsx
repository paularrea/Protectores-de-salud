import React from "react";
import { Form } from "usetheform";
import "./form.css";
import styles from "./form.module.scss";
import step1 from "../../img/steps/step1.png";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";

const Step1 = ({ patient, prevPage, ...props }) => {
  if (props.step !== 1) {
    return null;
  }
  const address = patient.address;
  const name = patient.patient;
  const city = patient.city;
  const country = patient.country;
  const phone = patient.phone;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={step1} alt="step1" />
          <p>PASO {props.step}</p>
          <h2>Verificar datos personales</h2>
        </div>
      </div>
      <div className={styles.form_content}>
        <Form name="Step1" {...props}>
          <div className={styles.content}>
            <FormControl variant="outlined" disabled>
              <InputLabel htmlFor="component-outlined">
                Primer Nombre
              </InputLabel>
              <OutlinedInput
                label="Primer Nombre"
                value={name}
                name="firstName"
                type="text"
              />
            </FormControl>

            <FormControl variant="outlined" disabled>
              <InputLabel htmlFor="component-outlined">
                Segundo Nombre
              </InputLabel>
              <OutlinedInput
                label="Segundo Nombre"
                value={name}
                name="middleName"
                type="text"
              />
            </FormControl>

            <FormControl variant="outlined" disabled>
              <InputLabel htmlFor="component-outlined">
                Primer Apellido
              </InputLabel>
              <OutlinedInput
                label="Primer Apellido"
                value="Primer Apellido"
                name="lastName"
                type="text"
              />
            </FormControl>

            <FormControl variant="outlined" disabled>
              <InputLabel htmlFor="component-outlined">
                Segundo Apellido
              </InputLabel>
              <OutlinedInput
                label="Segundo Apellido"
                value="Segundo Apellido"
                name="secondLastName"
                type="text"
              />
            </FormControl>

            <FormControl variant="outlined" disabled>
              <InputLabel htmlFor="component-outlined">País</InputLabel>
              <OutlinedInput
                label="País"
                value={country}
                name='country'
                type="text"
              />
            </FormControl>

            <FormControl variant="outlined" disabled>
              <InputLabel htmlFor="component-outlined">
                Número de teléfono
              </InputLabel>
              <OutlinedInput
                label="Número de teléfono"
                value={phone}
                name='phone'
                type="text"
              />
            </FormControl>

            <FormControl variant="outlined" disabled>
              <InputLabel htmlFor="component-outlined">Ciudad</InputLabel>
              <OutlinedInput
                label="Ciudad"
                value={city}
                name='city'
                type="text"
              />
            </FormControl>

            <FormControl variant="outlined" disabled>
              <InputLabel style={{ zIndex: "1" }} htmlFor="component-outlined">
                Calle
              </InputLabel>
              <OutlinedInput
                label="Calle"
                value={address}
                name='address'
                type="text"
              />
            </FormControl>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Step1;

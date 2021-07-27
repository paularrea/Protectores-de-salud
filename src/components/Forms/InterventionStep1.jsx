import React, { useState } from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import "./form.css";
import step1 from "../../img/steps/step1.png";
import * as Yup from "yup";
import styles from "./form.module.scss";

const Step1 = ({ refProp }) => {
  const [editName, setEditName] = useState(true);
  const [editMiddleName, setEditMiddleName] = useState(true);
  const [editLastName, setEditLastName] = useState(true);
  const [editSecondLastName, setEditSecondLastName] = useState(true);
  const [editPhone, setEditPhone] = useState(true);
  const [editCountry, setEditCountry] = useState(true);
  const [editCity, setEditCity] = useState(true);
  const [editAddress, setEditAddress] = useState(true);
  
  const patientInfoVerification = (
    <>
      <div className={styles.input_container}>
        <Field
          variant="outlined"
          disabled={editName}
          label="Primer Nombre"
          name="patientFirstName"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={styles.edit}
          type="button"
          onClick={() => setEditName(!editName)}
        >
          Editar
        </button>
      </div>

      <div className={styles.input_container}>
        <Field
          variant="outlined"
          disabled={editMiddleName}
          label="Segundo Nombre"
          name="patientMiddleName"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={styles.edit}
          type="button"
          onClick={() => setEditMiddleName(!editMiddleName)}
        >
          Editar
        </button>
      </div>

      <div className={styles.input_container}>
        <Field
          variant="outlined"
          disabled={editLastName}
          label="Primer Apellido"
          name="patientLastName"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={styles.edit}
          type="button"
          onClick={() => setEditLastName(!editLastName)}
        >
          Editar
        </button>
      </div>

      <div className={styles.input_container}>
        <Field
          variant="outlined"
          disabled={editSecondLastName}
          label="Segundo Apellido"
          name="patientSecondLastName"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={styles.edit}
          type="button"
          onClick={() => setEditSecondLastName(!editSecondLastName)}
        >
          Editar
        </button>
      </div>

      <div className={styles.input_container}>
        <Field
          variant="outlined"
          disabled={editPhone}
          label="Número de teléfono"
          name="patientPhone"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={styles.edit}
          type="button"
          onClick={() => setEditPhone(!editPhone)}
        >
          Editar
        </button>
      </div>

      <div className={styles.input_container}>
        <Field
          variant="outlined"
          disabled={editCountry}
          label="País"
          name="patientCountry"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={styles.edit}
          type="button"
          onClick={() => setEditCountry(!editCountry)}
        >
          Editar
        </button>
      </div>

      <div className={styles.input_container}>
        <Field
          variant="outlined"
          disabled={editCity}
          label="Ciudad"
          name="patientCity"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={styles.edit}
          type="button"
          onClick={() => setEditCity(!editCity)}
        >
          Editar
        </button>
      </div>

      <div className={styles.input_container}>
        <Field
          variant="outlined"
          disabled={editAddress}
          label="Calle"
          name="patientAddress"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={styles.edit}
          type="button"
          onClick={() => setEditAddress(!editAddress)}
        >
          Editar
        </button>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <div ref={refProp} className={styles.form_content}>
        <div className={styles.content}>
          {patientInfoVerification.props.children}
        </div>
      </div>
    </div>
  );
};

Step1.label = "Verificar datos personales";

Step1.validationSchema = Yup.object().shape({
  patientFirstName: Yup.string().required(
    "Porfavor introduzca el nombre de el/la paciente"
  ),
  patientLastName: Yup.string().required(
    "Porfavor introduzca el apellido de el/la paciente"
  ),
  patientPhone: Yup.string().required(
    "Porfavor introduzca el teléfono de el/la paciente"
  ),
  patientCountry: Yup.string().required(
    "Porfavor introduzca el país de el/la paciente"
  ),
  patientCity: Yup.string().required(
    "Porfavor introduzca la ciudad de el/la paciente"
  ),
  patientAddress: Yup.string().required(
    "Porfavor introduzca la dirección del paciente"
  ),
});

Step1.Img = step1;

export default Step1;

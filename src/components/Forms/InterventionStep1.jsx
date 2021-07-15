import React, { useState } from "react";
import { TextField } from "mui-rff";
import "./form.css";
import styles from "./form.module.scss";
import step1 from "../../img/steps/step1.png";

const Step1 = ({
  refProp,
  setAllInputsRequiredFilled,
  patient,
  prevPage,
  required,
  ...props
}) => {
  const [editName, setEditName] = useState(true);
  const [editMiddleName, setEditMiddleName] = useState(true);
  const [editLastName, setEditLastName] = useState(true);
  const [editSecondLastName, setEditSecondLastName] = useState(true);
  const [editPhone, setEditPhone] = useState(true);
  const [editCountry, setEditCountry] = useState(true);
  const [editCity, setEditCity] = useState(true);
  const [editAddress, setEditAddress] = useState(true);

  const [address, setAddress] = useState(patient.address);
  const [name, setName] = useState(patient.patient_name);
  const [middleName, setMiddleName] = useState(patient.patient_middle_name);
  const [lastName, setLastName] = useState(patient.patient_last_name);
  const [secondLastName, setSecondLastName] = useState(
    patient.patient_second_last_name
  );
  const [city, setCity] = useState(patient.city);
  const [country, setCountry] = useState(patient.country);
  const [phone, setPhone] = useState(patient.phone);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeMiddleName = (event) => {
    setMiddleName(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleChangeSecondLastName = (event) => {
    setSecondLastName(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  if (props.step !== 1) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.fixed_header}>
        <div className={styles.header}>
          <div>
            <img src={step1} alt="step1" />
            <p>PASO {props.step}</p>
            <h2>Verificar datos personales</h2>
          </div>
        </div>
      </div>
      <div ref={refProp} className={styles.form_content}>
        <div className={styles.content}>
        <TextField
              variant="outlined"
              label="Primer Nombre"
              name="patientFirstName"
              margin="none"
            />

          <div className={styles.input_container}>
            <TextField
              variant="outlined"
              label="Primer Nombre"
              name="name"
              disabled={editName}
              value={name}
              margin="none"
              // fieldProps={{validation: required()}}
              // required={required.patientFirstName}
              onChange={handleChangeName}
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
            <TextField
              variant="outlined"
              label="Segundo Nombre"
              disabled={editMiddleName}
              value={middleName}
              name="patientMiddleName"
              margin="none"
              required={false}
              onChange={handleChangeMiddleName}
            />
            <button
              className={styles.edit}
              type="button"
              onClick={() => setEditMiddleName(!editMiddleName)}
            >
              Editar
            </button>
          </div>
{/* 
          <div className={styles.input_container}>
            <TextField
              variant="outlined"
              label="Primer apellido"
              disabled={editLastName}
              value={lastName}
              name="patientLastName"
              margin="none"
              // fieldProps={{validation: required()}}
              // required={required.patientLastName}
              onChange={handleChangeLastName}
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
            <TextField
              variant="outlined"
              disabled={editSecondLastName}
              label="Segundo Apellido"
              value={secondLastName}
              name="patientSecondLastName"
              margin="none"
              required={false}
              onChange={handleChangeSecondLastName}
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
            <TextField
              variant="outlined"
              disabled={editPhone}
              label="Número de teléfono"
              value={phone}
              name="patientPhone"
              margin="none"
              // fieldProps={{validation: required()}}
              // required={required.patientPhone}
              onChange={handleChangePhone}
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
            <TextField
              variant="outlined"
              disabled={editCountry}
              label="País"
              value={country}
              name="patientCountry"
              onChange={handleChangeCountry}
              margin="none"
              // fieldProps={{validation: required()}}
              // required={required.patientCountry}
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
            <TextField
              variant="outlined"
              disabled={editCity}
              label="Ciudad"
              value={city}
              name="patientCity"
              onChange={handleChangeCity}
              margin="none"
              // fieldProps={{validation: required()}}
              // required={required.patientCity}
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
            <TextField
              variant="outlined"
              disabled={editAddress}
              label="Calle"
              value={address}
              name="patientAddress"
              onChange={handleChangeAddress}
              margin="none"
              // fieldProps={{validation: required()}}
              // required={required.patientAddress}
            />
            <button
              className={styles.edit}
              type="button"
              onClick={() => setEditAddress(!editAddress)}
            >
              Editar
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Step1;

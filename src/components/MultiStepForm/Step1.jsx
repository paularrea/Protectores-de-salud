import React, { useState } from "react";
import { Form } from "usetheform";
import "./form.css";
import styles from "./form.module.scss";
import step1 from "../../img/steps/step1.png";
import { FormControl, InputLabel} from "@material-ui/core";
import OutlinedInput from "./components/OutlinedInput"

const Step1 = ({ topRef, patient, prevPage, ...props }) => {
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
  const isVisit = patient.intervention_type === "VISIT";

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
            <div className={styles.input_container}>
              <FormControl variant="outlined" disabled={editName}>
                <InputLabel>Primer Nombre</InputLabel>
                <OutlinedInput
                  label="Primer Nombre"
                  value={name}
                  name="firstName"
                  type="text"
                  onChange={handleChangeName}
                />
              </FormControl>
              <button
                className={styles.edit}
                onClick={() => setEditName(!editName)}
              >
                Editar
              </button>
            </div>

            <div className={styles.input_container}>
              <FormControl variant="outlined" disabled={editMiddleName}>
                <InputLabel>Segundo Nombre</InputLabel>
                <OutlinedInput
                  label="Segundo Nombre"
                  value={middleName}
                  name="middleName"
                  type="text"
                  onChange={handleChangeMiddleName}
                />
              </FormControl>
              <button
                className={styles.edit}
                onClick={() => setEditMiddleName(!editMiddleName)}
              >
                Editar
              </button>
            </div>

            <div className={styles.input_container}>
              <FormControl variant="outlined" disabled={editLastName}>
                <InputLabel>Primer Apellido</InputLabel>
                <OutlinedInput
                  label="Primer Apellido"
                  value={lastName}
                  name="lastName"
                  type="text"
                  onChange={handleChangeLastName}
                />
              </FormControl>
              <button
                className={styles.edit}
                onClick={() => setEditLastName(!editLastName)}
              >
                Editar
              </button>
            </div>

            <div className={styles.input_container}>
              <FormControl variant="outlined" disabled={editSecondLastName}>
                <InputLabel>Segundo Apellido</InputLabel>
                <OutlinedInput
                  label="Segundo Apellido"
                  value={secondLastName}
                  name="secondLastName"
                  type="text"
                  onChange={handleChangeSecondLastName}
                />
              </FormControl>
              <button
                className={styles.edit}
                onClick={() => setEditSecondLastName(!editSecondLastName)}
              >
                Editar
              </button>
            </div>

            <div className={styles.input_container}>
              <FormControl variant="outlined" disabled={editPhone}>
                <InputLabel>Número de teléfono</InputLabel>
                <OutlinedInput
                  label="Número de teléfono"
                  value={phone}
                  name="phone"
                  type="text"
                  onChange={handleChangePhone}
                />
              </FormControl>
              <button
                className={styles.edit}
                onClick={() => setEditPhone(!editPhone)}
              >
                Editar
              </button>
            </div>

            <div className={styles.input_container}>
              <FormControl variant="outlined" disabled={editCountry}>
                <InputLabel>País</InputLabel>
                <OutlinedInput
                  label="País"
                  value={country}
                  name="country"
                  type="text"
                  onChange={handleChangeCountry}
                />
              </FormControl>
              <button
                className={styles.edit}
                onClick={() => setEditCountry(!editCountry)}
              >
                Editar
              </button>
            </div>

            <div className={styles.input_container}>
              <FormControl variant="outlined" disabled={editCity}>
                <InputLabel>Ciudad</InputLabel>
                <OutlinedInput
                  label="Ciudad"
                  value={city}
                  name="city"
                  type="text"
                  onChange={handleChangeCity}
                />
              </FormControl>
              <button
                className={styles.edit}
                onClick={() => setEditCity(!editCity)}
              >
                Editar
              </button>
            </div>
            {isVisit && (
              <div className={styles.input_container}>
                <FormControl variant="outlined" disabled={editAddress}>
                  <InputLabel style={{ zIndex: "1" }}>Calle</InputLabel>
                  <OutlinedInput
                    label="Calle"
                    value={address}
                    name="address"
                    type="text"
                    onChange={handleChangeAddress}
                  />
                </FormControl>
                <button
                  className={styles.edit}
                  onClick={() => setEditAddress(!editAddress)}
                >
                  Editar
                </button>
              </div>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Step1;

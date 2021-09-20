import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import "../../../../../styles/form.css";
import styles from "../../../../../styles/form.module.scss";
import step1 from "../../../../../img/steps/evaluation-step1.png";
// import * as Yup from "yup";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const appointmentType = ["Llamada", "Presencial"];
const patientList = ["Lucas Calvo", "Paloma López", "Andrés Giménez"];

const NewInterventionStep1 = ({ refProp, setFieldValue, values }) => {
  const [pdsAssigned, setPdsAssigned] = useState("Andrea Vega");
  const [patientSelected, setPatientSelected] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setPdsAssigned(pdsAssigned);
  }, [pdsAssigned]);

  const patientInfoVerification = (
    <>
      <div style={{ marginTop: "1rem", marginBottom: '1rem' }}>
        <FormControl variant="outlined" style={{ marginBottom: 0 }}>
          <InputLabel id="demo-simple-select-outlined-label">
            Selecciona un Paciente
          </InputLabel>
          <ErrorMessage
            name="PacienteName"
            component="div"
            className={styles.error_message}
          />
          <Field
            type="select"
            variant="outlined"
            label="Selecciona un Paciente"
            style={{ width: "100%" }}
            component={Select}
            name="PdsName"
            onChange={() => setPatientSelected(true)}
            MenuProps={{
              PaperProps: {
                style: {
                  transform: "translate3d(0, 0, 0)",
                },
              },
            }}
          >
            {patientList.map((answer, key) => (
              <MenuItem key={key} value={answer}>
                {answer}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
      </div>

      {patientSelected ? (
        <div style={{ marginTop: 0, marginBottom: "3rem", color:'gray', marginLeft:'1rem' }}>
          <span style={{ margin: 0 }}>PDS: </span>
          <span style={{ padding: 0 }}>{pdsAssigned}</span>
        </div>
      ) : null}

      {/* <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <FormControl variant="outlined" style={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-outlined-label">
            Selecciona un PDS
          </InputLabel>
          <ErrorMessage
            name="PdsName"
            component="div"
            className={styles.error_message}
          />
          <Field
            type="select"
            variant="outlined"
            label="Selecciona un PDS"
            style={{ width: "100%" }}
            component={Select}
            name="PdsName"
            MenuProps={{
              PaperProps: {
                style: {
                  transform: "translate3d(0, 0, 0)",
                },
              },
            }}
          >
            {pdsList.map((answer, key) => (
              <MenuItem
                key={key}
                value={patientSelected ? pdsAssigned : answer}
              >
                {answer}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
      </div> */}

      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <FormControl variant="outlined" style={{ marginBottom: "2rem" }}>
          <InputLabel id="demo-simple-select-outlined-label">
            Tipo de cita
          </InputLabel>
          <ErrorMessage
            name="PdsName"
            component="div"
            className={styles.error_message}
          />
          <Field
            type="select"
            variant="outlined"
            label="Tipo de cita"
            style={{ width: "100%" }}
            component={Select}
            name="PdsName"
            MenuProps={{
              PaperProps: {
                style: {
                  transform: "translate3d(0, 0, 0)",
                },
              },
            }}
          >
            {appointmentType.map((answer, key) => (
              <MenuItem key={key} value={answer}>
                {answer}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
      </div>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <KeyboardDatePicker
            id="date-picker-dialog"
            label="Fecha"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <KeyboardTimePicker
            id="hour-picker-dialog"
            label="Hora"
            inputVariant="outlined"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
      </MuiPickersUtilsProvider>
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

NewInterventionStep1.label = "Crear una nueva intervención";

// NewInterventionStep1.validationSchema = Yup.object().shape({
//   interventionSuggestion: Yup.string().required("Campo Obligatorio"),
// });

NewInterventionStep1.Img = step1;

export default NewInterventionStep1;

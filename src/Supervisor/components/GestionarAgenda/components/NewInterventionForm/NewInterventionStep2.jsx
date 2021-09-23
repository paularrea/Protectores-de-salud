import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import "../../../../../styles/form.css";
import styles from "../../../../../styles/form.module.scss";
import step1 from "../../../../../img/steps/suggestion-step2.png";
// import * as Yup from "yup";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const appointmentType = ["Llamada", "Visita"];
const actions = [
  "Verificar datos personales",
  "Aceptación Programa PDS",
  "Revisar aceptación del cliente",
];

const NewInterventionStep1 = ({ refProp, setFieldValue, values }) => {
  const [pdsAssigned, setPdsAssigned] = useState("Andrea Vega");
  const [value, setValue] = useState(null);

  useEffect(() => {
    setPdsAssigned(pdsAssigned);
  }, [pdsAssigned]);

  const patientInfoVerification = (
    <>
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
            label="Fecha de la intervención"
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
            label="Hora de la intervención"
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
      <div style={{ margin: "1rem 0 2rem 0" }}>
        <ErrorMessage
          name="actions"
          component="div"
          className={styles.error_message}
        />
        <h4>Indique las acciones requeridas</h4>
        <div
          className="checkbox-group"
          role="group"
          aria-labelledby="checkbox-group"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {actions.map((answer, key) => (
            <label
              key={key}
              style={{
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            >
              <Field
                style={{
                  cursor: "pointer",
                  margin: "0 1rem 0 0",
                  width: "16px",
                  height: "16px",
                }}
                type="checkbox"
                className={styles.checkbox_form}
                name="action"
                value={answer}
              />
              {answer}
              <span></span>
            </label>
          ))}
        </div>{" "}
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

NewInterventionStep1.label = "Crear una nueva intervención";

// NewInterventionStep1.validationSchema = Yup.object().shape({
//   interventionSuggestion: Yup.string().required("Campo Obligatorio"),
// });

NewInterventionStep1.Img = step1;

export default NewInterventionStep1;

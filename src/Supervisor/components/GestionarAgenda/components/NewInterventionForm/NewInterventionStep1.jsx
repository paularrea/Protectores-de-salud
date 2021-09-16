import React from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import "../../../../../styles/form.css";
import styles from "../../../../../styles/form.module.scss";
import step1 from "../../../../../img/steps/evaluation-step1.png";
import * as Yup from "yup";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const appointmentType = ["Llamada", "Presencial"];
const pdsList = ["Pau Larrea", "Andrea Vega", "David Campos"];
const patientList = ["Lucas Calvo", "Paloma López", "Andrés Giménez"];

const NewInterventionStep1 = ({ refProp, setFieldValue, values }) => {
  const patientInfoVerification = (
    <>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <FormControl variant="outlined" style={{ marginBottom: "2rem" }}>
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
      
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
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
            <MenuItem key={key} value={answer}>
              {answer}
            </MenuItem>
          ))}
        </Field>
        </FormControl>
      </div>
      
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
            value={values.newInterventionDateProposal}
            onChange={(value) =>
              setFieldValue("newInterventionDateProposal", value)
            }
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
            value={values.newInterventionTimeProposal}
            onChange={(value) =>
              setFieldValue("newInterventionTimeProposal", value)
            }
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

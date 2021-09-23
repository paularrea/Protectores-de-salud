import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import "../../../../../styles/form.css";
import styles from "../../../../../styles/form.module.scss";
import step1 from "../../../../../img/steps/suggestion-step1.png";
import PatientInfo from "./patientInfo";
// import * as Yup from "yup";

const patientList = ["Lucas Calvo", "Paloma López", "Andrés Giménez"];

const NewInterventionStep1 = ({ refProp, setFieldValue, values, data }) => {
  const [pdsAssigned, setPdsAssigned] = useState("Andrea Vega");
  const [patientSelected, setPatientSelected] = useState(false);

  useEffect(() => {
    setPdsAssigned(pdsAssigned);
  }, [pdsAssigned]);

  const patientInfoVerification = (
    <>
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
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
        <div
          style={{
            marginTop: "2rem",
            color: "gray",
            marginLeft: "1rem",
          }}
        >
          <PatientInfo />
        </div>
      ) : null}
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

NewInterventionStep1.label = "Elige un/a paciente";

// NewInterventionStep1.validationSchema = Yup.object().shape({
//   interventionSuggestion: Yup.string().required("Campo Obligatorio"),
// });

NewInterventionStep1.Img = step1;

export default NewInterventionStep1;

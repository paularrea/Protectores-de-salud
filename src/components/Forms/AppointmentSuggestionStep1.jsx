import React from "react";
import { Field, ErrorMessage } from "formik";
import "./form.css";
import styles from "./form.module.scss";
import step1 from "../../img/steps/evaluation-step1.png";
import * as Yup from "yup";
import "./form.css";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const visitTypes = ["Llamada", "Presencial"];

const AppointmentSuggestionStep1 = ({ refProp, setFieldValue, values }) => {
  const patientInfoVerification = (
    <>
      <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
        <ErrorMessage
          name="newInterventionTypeProposal"
          component="div"
          className={styles.error_message}
        />
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <ErrorMessage
            name="interventionSuggestion"
            component="div"
            className={styles.error_message}
          />
          <h4 className={styles.question_title}>Tipo de cita</h4>
          <div
            role="group"
            aria-labelledby="radio-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {visitTypes.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                <Field
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "18px",
                    height: "18px",
                  }}
                  type="radio"
                  name="interventionSuggestion"
                  value={answer}
                />
                {answer}
              </label>
            ))}
          </div>
        </div>
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
        {/* <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
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
        </div>*/}
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

AppointmentSuggestionStep1.label = "Sugerir próxima intervención";

AppointmentSuggestionStep1.validationSchema = Yup.object().shape({
  interventionSuggestion: Yup.string().required("Campo Obligatorio"),
});

AppointmentSuggestionStep1.Img = step1;

export default AppointmentSuggestionStep1;

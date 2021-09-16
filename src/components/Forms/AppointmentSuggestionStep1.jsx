import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
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

const AppointmentSuggestionStep1 = ({ refProp, setFieldValue, values }) => {
  const patientInfoVerification = (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <KeyboardDatePicker
            id="date-picker-dialog"
            label="Fecha"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            value={values.newInterventionDateProposal}
            onChange={(value) =>
              setFieldValue("newInterventionDateProposal", value)
            }
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </div>
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <h4 className={styles.question_title}>Observaciones</h4>
          <Field
            type="text"
            variant="outlined"
            multiline
            rowsMax={4}
            name='observaciones'
            margin="none"
            component={TextField}
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

AppointmentSuggestionStep1.label = "Sugerir fecha y motivos";

// AppointmentSuggestionStep1.validationSchema = Yup.object().shape({
//   interventionSuggestion: Yup.string().required("Campo Obligatorio"),
// });

AppointmentSuggestionStep1.Img = step1;

export default AppointmentSuggestionStep1;

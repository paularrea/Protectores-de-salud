import React from "react";
import { MenuItem } from "@material-ui/core";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import "./form.css";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import step1 from "../../img/steps/step1.png";
import * as Yup from "yup";
import styles from "./form.module.scss";

const visitTypes = ["Llamada", "Presencial"];
const Step6 = ({ refProp, setFieldValue, values }) => {
  const patientInfoVerification = (
    <>
      <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
        <ErrorMessage
          name="newInterventionTypeProposal"
          component="div"
          className={styles.error_message}
        />
        <h4 className={styles.question_title}>Tipo de cita</h4>
        <Field
          type="select"
          label="tipo de cita"
          variant="outlined"
          style={{ width: "100%" }}
          component={Select}
          name="newInterventionTypeProposal"
          MenuProps={{
            PaperProps: {
              style: {
                transform: "translate3d(0, 0, 0)",
              },
            },
          }}
        >
          {visitTypes.map((answer, key) => (
            <MenuItem key={key} value={answer}>
              {answer}
            </MenuItem>
          ))}
        </Field>
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <KeyboardDatePicker
            id="date-picker-dialog"
            label="Fecha"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            value={values.newInterventionDateProposal}
            onChange={value => setFieldValue("newInterventionDateProposal", value)}
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
            onChange={value => setFieldValue("newInterventionTimeProposal", value)}
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

Step6.label = "Sugerir próxima visita";

Step6.validationSchema = Yup.object().shape({
  newInterventionTypeProposal: Yup.string().required("Porfavor introduzca el tipo de cita"),
  newInterventionDateProposal: Yup.date().nullable(),
  newInterventionTimeProposal: Yup.date().nullable(),
});

Step6.Img = step1;

export default Step6;

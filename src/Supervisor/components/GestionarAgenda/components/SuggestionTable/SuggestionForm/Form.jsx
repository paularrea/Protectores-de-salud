import React from "react";
import { Formik, Form } from "formik";
import stylesForm from "../../../../../../styles/form.module.scss";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Field, ErrorMessage } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";

const appointmentType = ["Llamada", "Presencial"];
const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#0000009a",
        },
        "&$active": {
          color: "#000000bc",
        },
      },
    },
  },
});

const blue_pds = createMuiTheme({
  palette: {
    primary: {
      main: "#4284F3",
    },
    error: {
      main: "#FF2E79",
    },
  },
});

const Basic = () => (
  <div>
    <h3>Formulario</h3>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <Form
          style={{
            marginLeft:'2rem',
            textAlign: "center",
          }}
        >
          <ThemeProvider theme={theme}>
            <div style={{ marginTop: "1rem" }}>
              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Tipo de cita
                </InputLabel>
                <ErrorMessage
                  name="PdsName"
                  component="div"
                  className={stylesForm.error_message}
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
              <div style={{ marginTop: "1rem" }}>
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
              <div style={{ marginTop: "1rem" }}>
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
          </ThemeProvider>

          <button
            className="green-button"
            type="submit"
            disabled={isSubmitting}
          >
            Confirmar y enviar
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;

import React, { useState } from "react";
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
import styles from "../../../../../../styles/form.module.scss";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";

const appointmentType = ["Llamada", "Visita"];
const actions = [
  "Verificar datos personales",
  "Aceptación Programa PDS",
  "Revisar aceptación del cliente",
];
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
  palette: {
    primary: {
      main: "#4284F3",
    },
    error: {
      main: "#FF2E79",
    },
  },
});

const Basic = ({date}) => {
  const [value, setValue] = useState(null);
  return (
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
            display: "flex",
            alignItems: "flex-start",
            marginLeft: "2rem",
            textAlign: "center",
          }}
        >
          <ThemeProvider theme={theme}>
            <div>
              <div style={{ marginTop: "1rem" }}>
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Tipo de intervención
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
                    label="Seleccione una fecha"
                    inputVariant="outlined"
                    format="MM/dd/yyyy"
                    value={date}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <KeyboardTimePicker
                    id="hour-picker-dialog"
                    label="Seleccione una hora"
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
            </div>
            <div style={{ marginLeft: "3rem", textAlign: "left" }}>
              <ErrorMessage
                name="actions"
                component="div"
                className={styles.error_message}
              />
              <h4>Acciones:</h4>
              <div
                className="checkbox-group"
                role="group"
                aria-labelledby="checkbox-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
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
              <button
                style={{ marginTop: 0 }}
                className="green-button"
                type="submit"
                disabled={isSubmitting}
              >
                Confirmar y enviar
              </button>
            </div>
          </ThemeProvider>
        </Form>
      )}
    </Formik>
  );
};

export default Basic;

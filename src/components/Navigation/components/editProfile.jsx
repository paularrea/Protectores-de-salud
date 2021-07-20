import React, { useState } from "react";
import styles from "../../Forms/form.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import navStyles from "../navigation.module.scss";
import {
  InputAdornment,
  FormControl,
  FormHelperText,
  InputLabel,
  IconButton,
  OutlinedInput,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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

const EditProfile = ({ user, ...props }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleClickShowRepeatNewPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const submitChangePassword = () => {
  //   if (
  //     user &&
  //     user.supervisor_password === values.userCurrentPsw &&
  //     values.repeatNewPassword === values.newPassword
  //   ) {
  //     console.log(newPass, "password edited!");
  //     setNewPass(values.newPassword);
  //   } else {
  //     console.log("password not edited!");
  //     if (user && user.supervisor_password !== values.userCurrentPsw) {
  //       setErrorCurrentPsw(
  //         <p style={{ color: "#CE112C", marginBottom: "1rem" }}>
  //           La contraseña no es correcta
  //         </p>
  //       );
  //     } else if (values.repeatNewPassword !== values.newPassword) {
  //       setErrorSamePsw(
  //         <p style={{ color: "#CE112C", marginBottom: "1rem" }}>
  //           Las contraseñas no coinciden
  //         </p>
  //       );
  //     }
  //   }
  // };

  const submitChangePassword = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Introduce tu contraseña actual"),
    newPassword: Yup.string().required("Introduce una nueva contraseña"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Las contraseñas no coinciden")
      .required("Introduce de nuevo la nueva contraseña"),
  });

  return (
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submitChangePassword}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting,
      }) => {
        return (
          <form
            className={navStyles.edit_form_container}
            onSubmit={handleSubmit}
          >
            <h2>Cambiar contraseña</h2>
            <ThemeProvider theme={blue_pds}>
              <FormControl className={styles.input} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  error={Boolean(
                    touched.currentPassword && errors.currentPassword
                  )}
                >
                  Contraseña actual
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="currentPassword"
                  value={values.currentPassword}
                  onBlur={handleBlur}
                  type={showCurrentPassword ? "text" : "password"}
                  onChange={handleChange}
                  error={Boolean(
                    touched.currentPassword && errors.currentPassword
                  )}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCurrentPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showCurrentPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={135}
                />
                <FormHelperText
                  error={Boolean(
                    touched.currentPassword && errors.currentPassword
                  )}
                >
                  {touched.currentPassword && errors.currentPassword
                    ? errors.currentPassword
                    : ""}
                </FormHelperText>
              </FormControl>
              <div style={{ margin: "1rem 0 3rem 0" }}>
                <a className="link" href="/recuperar-contraseña">
                  Recuperar contraseña
                </a>
              </div>
              <FormControl className={styles.input} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  error={Boolean(touched.newPassword && errors.newPassword)}
                >
                  Nueva contraseña
                </InputLabel>
                <OutlinedInput
                  name="newPassword"
                  value={values.newPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.newPassword && errors.newPassword)}
                  id="outlined-adornment-password"
                  type={showNewPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showNewPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={132}
                />
                <FormHelperText
                  error={Boolean(touched.newPassword && errors.newPassword)}
                >
                  {touched.newPassword && errors.newPassword
                    ? errors.newPassword
                    : ""}
                </FormHelperText>
              </FormControl>
              <div style={{ height: "1rem" }}></div>
              <FormControl className={styles.input} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                >
                  Confirmar contraseña
                </InputLabel>
                <OutlinedInput
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  id="outlined-adornment-password"
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowRepeatNewPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={157}
                />{" "}
                <FormHelperText
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                >
                  {touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ""}
                </FormHelperText>
              </FormControl>
            </ThemeProvider>
            <button className="green-button" type="submit">
              Cambiar contraseña
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default EditProfile;

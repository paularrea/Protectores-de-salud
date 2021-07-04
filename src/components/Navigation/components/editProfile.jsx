import React, { useState } from "react";
import styles from "../../Forms/form.module.scss";
import navStyles from "../navigation.module.scss";
import {
  InputAdornment,
  FormControl,
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
  },
});

const EditProfile = ({ user, ...props }) => {
  const [values, setValues] = useState({
    userCurrentPsw: "",
    newPassword: "",
    repeatNewPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    showRepeatNewPassword: false,
  });

  const [newPass, setNewPass] = useState("");
  const [errorCurrentPsw, setErrorCurrentPsw] = useState("");
  const [errorSamePsw, setErrorSamePsw] = useState("");

  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword });
  };
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };
  const handleClickShowRepeatNewPassword = () => {
    setValues({
      ...values,
      showRepeatNewPassword: !values.showRepeatNewPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const ChangePassword = () => {
    if (
      user &&
      user.supervisor_password === values.userCurrentPsw &&
      values.repeatNewPassword === values.newPassword
    ) {
      console.log(newPass, "password edited!");
      setNewPass(values.newPassword);
    } else {
      console.log("password not edited!");
      if (user && user.supervisor_password !== values.userCurrentPsw) {
        setErrorCurrentPsw(
          <p style={{ color: "#CE112C", marginBottom: "1rem" }}>
            La contraseña no es correcta
          </p>
        );
      } else if (values.repeatNewPassword !== values.newPassword) {
        setErrorSamePsw(
          <p style={{ color: "#CE112C", marginBottom: "1rem" }}>
            Las contraseñas no coinciden
          </p>
        );
      }
    }
  };

  return (
    <form className={navStyles.edit_form_container} onSubmit={ChangePassword}>
      <h2>Cambiar contraseña</h2>
      {errorCurrentPsw !== "" && <div className="error">{errorCurrentPsw}</div>}
      <ThemeProvider theme={blue_pds}>
        <FormControl className={styles.input} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Contraseña actual
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            type={values.showCurrentPassword ? "text" : "password"}
            onChange={(e) =>
              setValues({ ...values, userCurrentPsw: e.target.value })
            }
            value={values.userCurrentPsw}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowCurrentPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showCurrentPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={135}
          />
        </FormControl>
        <div style={{ margin: "1rem 0 3rem 0" }}>
          <a className="link" href="/recuperar-contraseña">
            Recuperar contraseña
          </a>
        </div>
        {errorSamePsw !== "" && <div className="error">{errorSamePsw}</div>}
        <FormControl className={styles.input} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Nueva contraseña
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            type={values.showNewPassword ? "text" : "password"}
            onChange={(e) =>
              setValues({ ...values, newPassword: e.target.value })
            }
            value={values.newPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={132}
          />
        </FormControl>
        <div style={{ height: "1rem" }}></div>
        <FormControl className={styles.input} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Confirmar contraseña
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            type={values.showRepeatNewPassword ? "text" : "password"}
            onChange={(e) =>
              setValues({ ...values, repeatNewPassword: e.target.value })
            }
            value={values.repeatNewPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRepeatNewPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showRepeatNewPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={157}
          />
        </FormControl>
      </ThemeProvider>
      <button className="green-button" type="submit">
        Cambiar contraseña
      </button>
    </form>
  );
};

export default EditProfile;

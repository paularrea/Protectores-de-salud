import React, { useState } from "react";
import styles from "../../MultiStepForm/form.module.scss";
import navStyles from "../navigation.module.scss";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const EditProfile = ({ user, ...props }) => {
  const [password, setPassword] = useState({ currentPsw: "", newPsw: "" });
  const [values, setValues] = useState({
    userCurrentPsw: user && user.supervisor_password,
    newPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
  });

  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword });
  };
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const changePassword = () => {
    console.log(password.newPsw, "new");
  };

  return (
    <form className={navStyles.edit_form_container} onSubmit={changePassword}>
      <h2>Cambiar contraseña</h2>
      <FormControl className={styles.input} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Contraseña actual
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          onChange={(e) =>
            setPassword({ ...password, currentPsw: e.target.value })
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

      <FormControl className={styles.input} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Nueva contraseña
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          onChange={(e) => setPassword({ ...password, newPsw: e.target.value })}
          value={values.userNewPsw}
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
          labelWidth={135}
        />
      </FormControl>
      <button className="green-button" type="submit">
        Cambiar contraseña
      </button>
    </form>
  );
};

export default EditProfile;

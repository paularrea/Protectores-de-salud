import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "../styles/login.module.scss";
import logo from "../img/logo.png";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.form_container}>
        <img src={logo} alt="Protectores de salud" />
        {error !== "" && <div className="error">{error}</div>}
        <TextField
          className={styles.input}
          id="username"
          label="Username"
          variant="outlined"
          type="text"
          name="username"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          value={details.username}
        />

        <TextField
          className={styles.input}
          id="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          name="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <div className={styles.recuperar}>
          <a href="/recuperar-contraseña">
            Recuperar contraseña
          </a>
        </div>
        <input className={styles.blue_button} type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginForm;

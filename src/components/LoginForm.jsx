import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {(error !== "") && (<div className='error'>{error}</div>)}
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          type="text"
          name="username"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          value={details.username}
        />

        <TextField
          id="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          name="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginForm;

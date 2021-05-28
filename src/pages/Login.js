import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import Dashboard from "./Dashboard";

import "../styles/App.scss"

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [dbUser, setDbUser] = useState({ username: "", password: "" , data:{}});
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDbUser({
          username: data[0].username,
          password: data[0].password,
          data: data[0]
        });
      });
  }, []);

  const Login = (details) => {
    console.log(details);
    if (
      details.username === dbUser.username &&
      details.password === dbUser.password
    ) {
      console.log("logged in!");
      setUser({
        username: details.username,
        password: details.password,
      });
      sessionStorage.setItem('user', JSON.stringify(details))
    } else {
      console.log("not logged in!");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({
      username: "",
      password: "",
    });
    sessionStorage.removeItem('user')
  };

  return (
    <div className='container-mobile'>
      {sessionStorage.getItem('user') !== null ? (
        <div className="welcome">
          <Dashboard Logout={Logout} user={user} />
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Login;

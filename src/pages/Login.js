import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import MediaQuery from "react-responsive";
import Dashboard from "./Dashboard";
import "../styles/App.scss";
import styles from "../styles/login.module.scss";
import loginImg from "../img/loginImg.png";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [dbUser, setDbUser] = useState({
    username: "",
    password: "",
    data: {},
  });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/web_dynamic_content"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDbUser({
          username: data[0].supervisor_name,
          password: data[0].supervisor_password,
          data: data[0],
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
      sessionStorage.setItem("user", JSON.stringify(details));
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
    sessionStorage.removeItem("user");
  };

  return (
    <div className="container-mobile">
      {sessionStorage.getItem("user") !== null ? (
        <div className="welcome">
          <Dashboard Logout={Logout} user={user} />
        </div>
      ) : (
        <>
          <MediaQuery minWidth={767}>
            <div className={styles.login_container}>
              <img className={styles.login_img} src={loginImg} alt="login" />
              <div className={styles.login_form}>
                <LoginForm Login={Login} error={error} />
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <LoginForm Login={Login} error={error} />
          </MediaQuery>
        </>
      )}
    </div>
  );
};

export default Login;

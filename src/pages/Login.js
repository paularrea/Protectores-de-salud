import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import MediaQuery from "react-responsive";
import Dashboard from "./Dashboard";
import "../styles/App.scss";
import styles from "../styles/login.module.scss";
import loginImg from "../img/login-img.jpg";
import loginImgDesktop from "../img/desktop-login.jpg";
import LegalAdvise from "./LegalAdvise";

const Login = () => {
  const [accept, setAccept] = useState(false);
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
      setError(<p style={{color:'#CE112C', marginBottom:'2rem'}}>El usuario o contraseña son incorrectos</p>);
    }
  };

  const Logout = () => {
    setUser({
      username: "",
      password: "",
    });
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("Legal advise");
  };

  return (
    <div>
      {sessionStorage.getItem("user") !== null ? (
        <>
          {sessionStorage.getItem("Legal advise") !== 'accepted' && (
            <LegalAdvise accept={accept} setAccept={setAccept} />
          )}
          <Dashboard Logout={Logout} user={user} />
        </>
      ) : (
        <>
          <MediaQuery maxWidth={767}>
            <LoginForm Login={Login} error={error} />
          </MediaQuery>
          <MediaQuery minWidth={767} and maxWidth={1025}>
            <div className={styles.login_container}>
              <img className={styles.login_img} src={loginImg} alt="login" />
              <div className={styles.login_form}>
                <LoginForm Login={Login} error={error} />
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={1026}>
            <div className={styles.login_container}>
              <img
                className={styles.login_img}
                src={loginImgDesktop}
                alt="login"
              />
              <div className={styles.login_form}>
                <LoginForm Login={Login} error={error} />
              </div>
            </div>
          </MediaQuery>
        </>
      )}
    </div>
  );
};

export default Login;

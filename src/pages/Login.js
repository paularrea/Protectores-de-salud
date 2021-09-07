import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import MediaQuery from "react-responsive";
import WorkerDashboard from "./WorkerDashboard";
import "../styles/App.scss";
import styles from "../styles/login.module.scss";
import loginImg from "../img/login-img.jpg";
import loginImgDesktop from "../img/desktop-login.jpg";
import LegalAdvise from "./LegalAdvise";
import { useGeolocation } from "../hooks/useGeolocation.js";
// import SupervisorIndex from "../Supervisor/pages/SupervisorIndex"
import { Redirect } from "react-router";

const Login = () => {
  const [accept, setAccept] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    user_type: "",
  });
  const [dbUser, setDbUser] = useState({
    username: "",
    password: "",
    data: {},
  });
  const [userLoggedEvent, setUserLoggedEvent] = useState({});
  const [error, setError] = useState("");
  const { geolocation } = useGeolocation();

  useEffect(() => {
    fetch(
      "https://60b0f3a01f26610017fff886.mockapi.io/protectores-de-salud/v2-dynamic-content"
      // 'http://localhost:3004/users'
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDbUser(data);
        setUserLoggedEvent({
          action: "LOGIN",
          local_date_time: new Date().toString(),
          utc_date_time: new Date().toUTCString(),
          device_user_agent: navigator.userAgent,
          user_id: data.id,
          position_coords_latitude: geolocation && geolocation.latitude,
          position_coords_longitude: geolocation && geolocation.longitude,
        });
      });
  }, [geolocation]);

  const Login = (details) => {
    const filtered =
      dbUser &&
      dbUser.filter(
        (user) =>
          user.community_worker_first_name === details.username &&
          user.community_worker_password === details.password
      );
    if (filtered) {
      setDbUser(filtered);
      console.log(userLoggedEvent, "USER_LOGGED_EVENT");
      setUser({
        username: details.username,
        password: details.password,
        type: details.user_type,
      });
      sessionStorage.setItem("user", JSON.stringify(details));
    } else {
      console.log("not logged in!");
      setError(
        <p style={{ color: "#CE112C", marginTop: "2rem" }}>
          El usuario o contraseña son incorrectos
        </p>
      );
    }
  };

  const Logout = () => {
    setUser({
      username: "",
      password: "",
      user_type: "",
    });
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("Legal advise");
    sessionStorage.removeItem("Red noti");
    sessionStorage.removeItem("Blue noti");
  };

  const isWorker = dbUser[0] && dbUser[0].user_type === "COMMUNITY_WORKER" && (
    <>
      {sessionStorage.getItem("Legal advise") !== "accepted" && (
        <LegalAdvise accept={accept} setAccept={setAccept} />
      )}
      {sessionStorage.getItem("Legal advise") === "accepted" && (
        <Redirect
          to={{
            pathname: "/community-worker",
            state: {
              user: dbUser[0],
            },
          }}
        />

        // <WorkerDashboard Logout={Logout} user={dbUser[0]} />
      )}
    </>
  );

  const isAdmin = dbUser[0] && dbUser[0].user_type === "SUPERVISOR" && (
    <Redirect to="/supervisor" Logout={Logout} user={dbUser[0]} />
    // <SupervisorIndex  />
  );

  return (
    <div>
      {sessionStorage.getItem("user") !== null ? (
        <>
          {isWorker}
          {isAdmin}
        </>
      ) : (
        <>
          {/* phone */}
          <MediaQuery maxWidth={767}>
            <LoginForm Login={Login} error={error} />
          </MediaQuery>
          {/* tablet */}
          <MediaQuery minWidth={767} and maxWidth={1025}>
            <div className={styles.login_container}>
              <img className={styles.login_img} src={loginImg} alt="login" />
              <div className={styles.login_form}>
                <LoginForm Login={Login} error={error} />
              </div>
            </div>
          </MediaQuery>
          {/* desktop */}
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

import React, { useState, useEffect } from "react";
import ProximasCitas from "../components/ProximasCitas/ProximasCitas.jsx";
import styles from "../styles/dashboard.module.scss";
import Navbar from "../components/Nav/navbar.jsx";
import NotificationList from "../components/Notificaciones/NotificationList.jsx";

const Dashboard = ({ user, Logout }) => {
  const [userData, setDataUser] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDataUser(data[0]);
      });
  }, []);

  console.log(user.username, "useeeeer");

  return (
    <div className={styles.container}>
      <Navbar Logout={Logout} />
      <div className={styles.intro}>
        <h2>
          Hola <span>{user && user.username},</span>
        </h2>
        <p>bienvenido a tu espacio de trabajo.</p>
      </div>
      <NotificationList user={user} />
      <ProximasCitas userData={userData} />
    </div>
  );
};

export default Dashboard;

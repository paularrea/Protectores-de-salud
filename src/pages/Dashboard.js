import React from "react";
import NotisRojas from "../components/Notificaciones/NotisRojas.jsx";
import NotisAzules from "../components/Notificaciones/NotisAzules.jsx";
import ProximasCitas from "../components/ProximasCitas/ProximasCitas.jsx";
import styles from "../styles/dashboard.module.scss";
import Navbar from "../components/Nav/navbar.jsx";

const Dashboard = ({ user, Logout }) => {
  return (
    <div className={styles.container}>
      <Navbar Logout={Logout}/>
      <div className={styles.intro}>
        <h2>
          Hola <span>{user.username},</span>
        </h2>
        <p>bienvenido a tu espacio de trabajo.</p>
      </div>
      <NotisRojas />
      <NotisAzules />
      <ProximasCitas />
    </div>
  );
};

export default Dashboard;

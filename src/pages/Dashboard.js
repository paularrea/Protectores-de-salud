import React, {useContext} from "react";
import ProximasCitas from "../components/ProximasCitas/ProximasCitas.jsx";
import styles from "../styles/dashboard.module.scss";
import Navbar from "../components/Nav/navbar.jsx";
import NotificationList from "../components/Notificaciones/NotificationList.jsx";
import { UserContext } from "../UserContext.js";

const Dashboard = ({ Logout }) => {

  const {contextUser} = useContext(UserContext)

  return (
    <div className={styles.container}>
      <Navbar Logout={Logout} />
      <div className={styles.intro}>
        <h2>
          Hola <span>{contextUser && contextUser.username},</span>
        </h2>
        <p>bienvenido a tu espacio de trabajo.</p>
      </div>
      <NotificationList user={contextUser} />
      <ProximasCitas user={contextUser} />
    </div>
  );
};

export default Dashboard;

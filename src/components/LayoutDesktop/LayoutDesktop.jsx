import React, { useContext } from "react";
import styles from "../../styles/workerDashboard.module.scss";
import "../../styles/App.scss";
import NotificationList from "../Notifications/NotificationList.jsx";
import { UserContext } from "../../UserContext.js";
import MediaQuery from "react-responsive";

const LayoutDesktop = () => {
  const { contextUser } = useContext(UserContext);
  return (
    <section className="intro-notis">
      <div className={styles.intro}>
        <h2>
          Hola <span>{contextUser && contextUser.community_worker_first_name},</span>
        </h2>
        <p>bienvenida a tu espacio de trabajo.</p>
      </div>
      <MediaQuery maxWidth={1025}>
        <NotificationList user={contextUser} />
      </MediaQuery>
      <MediaQuery minWidth={1026}>
        <div style={{ width: "80%", marginTop: "15%" }}>
          <h3 style={{ marginBottom: "1rem" }}>
            Mis notificaciones
          </h3>
          <NotificationList user={contextUser} />
        </div>
      </MediaQuery>
    </section>
  );
};

export default LayoutDesktop;

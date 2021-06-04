import React, { useContext } from "react";
import styles from "../../styles/dashboard.module.scss";
import NotificationList from "../../components/Notificaciones/NotificationList.jsx";
import { UserContext } from "../../UserContext.js";
import MediaQuery from "react-responsive";

const IntroNotis = () => {
  const { contextUser } = useContext(UserContext);
  return (
    <section>
      <div className={styles.intro}>
        <h2>
          Hola <span>{contextUser && contextUser.supervisor_name},</span>
        </h2>
        <p>bienvenido a tu espacio de trabajo.</p>
      </div>
      <MediaQuery maxWidth={1025}>
        <NotificationList user={contextUser} />
      </MediaQuery>
      <MediaQuery minWidth={1026}>
        <div style={{ width: "80%", marginTop: "15%" }}>
          <h3 style={{ marginBottom: "1rem", marginLeft: "2rem" }}>
            Mis notificaciones
          </h3>
          <NotificationList user={contextUser} />
        </div>
      </MediaQuery>
    </section>
  );
};

export default IntroNotis;

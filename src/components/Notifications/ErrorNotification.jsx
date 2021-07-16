import React from "react";
import styles from "./notificaciones.module.scss";

const ErrorNotification = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFF2F7",
        borderLeft: "2px solid #FF2E79",
      }}
      className={styles.notificaciones_container}
    >
      <p>{children}</p>
    </div>
  );
};

export default ErrorNotification;

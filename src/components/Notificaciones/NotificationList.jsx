import React, { useState, useEffect } from "react";
import styles from "./notificaciones.module.scss";
import campana from "../../img/campana.png";
import alert from "../../img/alert.png";

const NotificationList = ({ user }) => {
  const [allNotifications, setAllNotifications] = useState();
  const [closeRedNotification, setCloseRedNotification] = useState(false);
  const [closeBlueNotification, setCloseBlueNotification] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllNotifications(data.map((item) => item.notifications[0]));
      });
  }, []);

  const closeRedNoti = () => {
    setCloseRedNotification(true);
  };
  const closeBlueNoti = () => {
    setCloseBlueNotification(true);
  };

  const redNotifications =
    allNotifications && allNotifications.map((red) => red.rojas);

  const blueNotifications =
    allNotifications && allNotifications.map((blue) => blue.azules);

  return (
    <div>
      {redNotifications &&
        !closeRedNotification &&
        redNotifications[0].map((item, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#e942362f",
              borderLeft: "2px solid #E94236",
            }}
            className={styles.notificaciones_container}
          >
            <p>{item.message}</p>

            <button className="link" onClick={closeRedNoti}>
              Ok, entendido.
            </button>
            <div className={styles.icon}>
              <img src={campana} alt="" />
            </div>
          </div>
        ))}

      {blueNotifications &&
        !closeBlueNotification &&
        blueNotifications[0].map((item, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#4283f332",
              borderLeft: "2px solid #4284F3",
            }}
            className={styles.notificaciones_container}
          >
            <p>{item.message}</p>

            <button className="link" onClick={closeBlueNoti}>
              Ok, entendido.
            </button>
            <div className={styles.icon}>
              <img src={alert} alt="" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default NotificationList;

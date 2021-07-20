import React, { useState, useEffect, useContext } from "react";
import styles from "./notificaciones.module.scss";
import campana from "../../img/campana.png";
import alert from "../../img/alert.png";
import { UserContext } from "../../UserContext";

const NotificationList = ({ user }) => {
  const { contextUser } = useContext(UserContext);
  const [allNotifications, setAllNotifications] = useState();
  const [closeRedNotification, setCloseRedNotification] = useState(false);
  const [closeBlueNotification, setCloseBlueNotification] = useState(false);
  const [notifSent, setNotifSent] = useState({});

  useEffect(() => {
    setAllNotifications(
      contextUser ? contextUser.notifications.map((item) => item) : null
    );

    setNotifSent({
      action: "NOTIF_SENT",
      LocalDateAndTime: new Date().toString(),
      UTCDateAndTime: new Date().toUTCString(),
      userAgent: navigator.userAgent,
      userId: contextUser && contextUser.id,
    });
  }, [contextUser, user]);

  const closeRedNoti = () => {
    // NOTIF_SENT
    console.log(user && notifSent, "NOTIF_SENT");
    setCloseRedNotification(true);
    sessionStorage.setItem("Red noti", "closed");
  };
  const closeBlueNoti = () => {
    console.log(user && notifSent, "NOTIF_SENT");
    setCloseBlueNotification(true);
    sessionStorage.setItem("Blue noti", "closed");
  };

  const redNotifications = allNotifications
    ? allNotifications.map((red) => red.rojas)
    : null;

  const blueNotifications = allNotifications
    ? allNotifications.map((blue) => blue.azules)
    : null;

  return (
    <div>
      {sessionStorage.getItem("Red noti") !== "closed" &&
        redNotifications &&
        !closeRedNotification &&
        redNotifications[0].map((item, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#FFF2F7",
              borderLeft: "2px solid #FF2E79",
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

      {sessionStorage.getItem("Blue noti") !== "closed" &&
        blueNotifications &&
        !closeBlueNotification &&
        blueNotifications[0].map((item, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#F3F8FF",
              borderLeft: "2px solid #2E83F8",
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

      {sessionStorage.getItem("Red noti") === "closed" &&
        sessionStorage.getItem("Blue noti") === "closed" && (
          <p className={styles.no_notifications}>
            No tienes nuevas notificaciones.
          </p>
        )}
      {allNotifications
        ? allNotifications.length === 0 && (
            <p className={styles.no_notifications}>
              No tienes nuevas notificaciones.
            </p>
          )
        : null}
    </div>
  );
};

export default NotificationList;

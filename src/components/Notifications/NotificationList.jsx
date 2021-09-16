import React, { useState, useEffect, useContext } from "react";
import styles from "./notificaciones.module.scss";
import campana from "../../img/campana.png";
import alert from "../../img/alert.png";
import { UserContext } from "../../UserContext";
import { useGeolocation } from "../../hooks/useGeolocation";

const NotificationList = ({ user }) => {
  const { contextUser } = useContext(UserContext);
  const [allNotifications, setAllNotifications] = useState();
  const [closeRedNotification, setCloseRedNotification] = useState(false);
  const [closeBlueNotification, setCloseBlueNotification] = useState(false);
  const [notifSent, setNotifSent] = useState({});
  const { geolocation } = useGeolocation();

  useEffect(() => {
    setAllNotifications(
      contextUser ? contextUser.notifications.map((item) => item) : null
    );

    setNotifSent({
      action: "NOTIFICATION_ACKNOWLEDGED",
      local_date_time: new Date().toString(),
      utc_date_time: new Date().toUTCString(),
      device_user_agent: navigator.userAgent,
      user_id: contextUser && contextUser.id,
      position_coords_latitude: geolocation && geolocation.latitude,
      position_coords_longitude: geolocation && geolocation.longitude,
    });
  }, [contextUser, geolocation]);

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
    ? allNotifications.filter((noti) => noti.background_color === "red")
    : null;

  const blueNotifications = allNotifications
    ? allNotifications.filter((noti) => noti.background_color === "blue")
    : null;


  return (
    <div>
      {sessionStorage.getItem("Red noti") !== "closed" &&
        redNotifications &&
        !closeRedNotification &&
        redNotifications.map((item, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#FFF2F7",
              borderLeft: "2px solid #FF2E79",
            }}
            className={styles.notificaciones_container}
          >
            <p>{item.main_text}</p>

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
        blueNotifications.map((item, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "#F3F8FF",
              borderLeft: "2px solid #2E83F8",
            }}
            className={styles.notificaciones_container}
          >
            <p>{item.main_text}</p>

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

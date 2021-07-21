import React from "react";
import styles from "../navigation.module.scss";
import arrow from "../../../img/arrow.png";
import logout_logo from "../../../img/logout-logo.png";
import EditProfile from "./editProfile";

const BurgerDesktop = ({ user, Logout, UserFirstLetter, setMenuOpen }) => {
  return (
    <div className={styles.burger_desktop_container}>
      <div className={styles.blue_section}>
        <div className={styles.menu}>
          <div className={styles.avatar}>
            <div className={styles.circle}>
              {UserFirstLetter} <div className={styles.red_dot}></div>
            </div>
          </div>
          <h3>Mi perfil</h3>
          <button>
            <div>
              <p>Cambiar contraseña</p> <img src={arrow} alt="editar perfil" />
            </div>
          </button>
          <button
            style={{ borderBottom: "1px solid #0057ff33" }}
            onClick={Logout}
          >
            <div className={styles.logout}>
              <p>Logout</p> <img src={logout_logo} alt="logout" />
            </div>
          </button>
          <div className={styles.blue_button_container}>
            <button
              className={styles.blue_button}
              onClick={() => setMenuOpen(false)}
            >
              Volver al calendario
            </button>
          </div>
        </div>
      </div>
      <div className={styles.white_section}>
        <EditProfile user={user} />
      </div>
    </div>
  );
};

export default BurgerDesktop;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";
import { SidebarData } from "./SidebarData";
import arrow from "../../img/arrow.png";
import logo from "../../img/logo2.png";
import logout_logo from "../../img/logout-logo.png";

const activeStyle = {
  borderRight: "2px solid #0057FF",
  fontWeight: "700",
  backgroundColor: "rgba(0, 85, 255, 0.2)",
};

const Navigation = ({ children, Logout }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.nav_menu}>
        <nav>
          <ul className={styles.nav_menu_items}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.nav_text}>
                  <NavLink to={item.path} activeStyle={activeStyle}>
                    <div>
                      <p>{item.title}</p>
                      <img src={arrow} alt="flecha" />
                    </div>
                  </NavLink>
                </li>
              );
            })}
            <li className={styles.nav_text}>
              <button onClick={Logout}>
                <div className={styles.logout}>
                  <p>Logout</p> <img src={logout_logo} alt="logout" />
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.page}>{children}</div>
    </div>
  );
};

export default Navigation;

import React from "react";
import logo2 from "../../img/logo2.png";
import styles from "./navigation.module.scss";
import Burger from "./components/burger";

const Navbar = ({ user, Logout }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo2} alt="Protectores de salud" />
      </div>
      <div className={styles.burger}>
        <Burger user={user} Logout={Logout} />
        {/* <button className={styles.logout} onClick={Logout}>Logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;

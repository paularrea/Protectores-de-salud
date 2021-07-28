import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import "./burger.css";
import { Link } from "react-router-dom";
import styles from "../navigation.module.scss";
import arrow from "../../../img/arrow.png";
import logout_logo from "../../../img/logout-logo.png";
import MediaQuery from "react-responsive";
import BurgerDesktop from "./burgerDesktop";

const Burger = ({ user, Logout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const UserFirstLetter = user && user.community_worker_first_name.charAt(0);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <>
      <Menu
        customBurgerIcon={
          <div className="burger-icon">
            {UserFirstLetter} <div className="red-dot"></div>
          </div>
        }
        right
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <MediaQuery maxWidth={1024}>
          <nav className={styles.mobile_menu}>
            <h3 style={{ paddingBottom: "2rem" }}>Mi perfil</h3>
              <Link
                to={{
                  pathname: "/edit-profile",
                  state: {
                    user: user,
                  },
                }}
              >
                <p>Cambiar contraseña</p>
              <div>
                <img src={arrow} alt="editar perfil" />
              </div>
              </Link>
            <button
              className={styles.logout}
              style={{ borderBottom: "2px solid #00000033" }}
              onClick={Logout}
            >
              <div>
                <p>Logout</p>
              </div>{" "}
              <div>
                <img src={logout_logo} alt="logout" />
              </div>
            </button>
          </nav>
        </MediaQuery>
        <MediaQuery minWidth={1025}>
          <BurgerDesktop
            user={user}
            setMenuOpen={setMenuOpen}
            UserFirstLetter={UserFirstLetter}
            Logout={Logout}
          />
        </MediaQuery>
      </Menu>
    </>
  );
};

export default Burger;

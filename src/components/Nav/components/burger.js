import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import "./burger.css";
import logo2 from "../../../img/logo2.png";

const Burger = ({ user, Logout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <>
      <Menu
        customBurgerIcon={
          <div className="burger-icon">
            <p>P</p>
          </div>
        }
        right
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <div className="logo-menu">
          <img src={logo2} alt="" />
        </div>
        <nav className="bm-item-list">
          <button onClick={Logout}>Logout</button>
        </nav>
      </Menu>
    </>
  );
};

export default Burger;

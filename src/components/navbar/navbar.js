import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.__navbar}>
      <NavLink className={styles.__navbar_title_link} to="/">
        DANIEL ANDRÉS VIDAL
      </NavLink>
      <div className={styles.__navbar_menu}>
        
        <a className={styles.__navbar_menu_item} href="#sobremi">SOBREMI</a>
        <a className={styles.__navbar_menu_item} href="#servicios">SERVICIOS</a>
        <a className={styles.__navbar_menu_item} href="#proyectos">PROYECTOS</a>
        <NavLink
          className={styles.__navbar_menu_item}
          activeStyle={{ color: "#fe9900" }}
          to="/contacto"
        >
          CONTACTO
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;

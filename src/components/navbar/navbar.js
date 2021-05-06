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
        <NavLink
          className={styles.__navbar_menu_item}
          activeStyle={{ color: "#fe9900" }}
          to="/sobremi"
        >
          SOBRE MÍ
        </NavLink>
        <NavLink
          className={styles.__navbar_menu_item}
          activeStyle={{ color: "#fe9900" }}
          to="/servicios"
        >
          SERVICIOS
        </NavLink>
        <NavLink
          className={styles.__navbar_menu_item}
          activeStyle={{ color: "#fe9900" }}
          to="/proyectos"
        >
          PROYECTOS
        </NavLink>
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

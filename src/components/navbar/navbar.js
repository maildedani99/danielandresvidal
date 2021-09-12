import React from "react";
import styles from "./navbar.module.css";
import daniel from "../../media/daniperfil.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.__navbar}>
      <a className={styles.__navbar_title_link} href="#sobremi">
        DANIEL ANDRÉS VIDAL
      </a>
      
      <div className={styles.__navbar_menu}>
        <a className={styles.__navbar_menu_item} href="#sobremi">
          SOBRE MÍ
        </a>
        <a className={styles.__navbar_menu_item} href="#servicios">
          SERVICIOS
        </a>
        <a className={styles.__navbar_menu_item} href="#proyectos">
          PROYECTOS
        </a>
        <a className={styles.__navbar_menu_item} href="#contacto">
          CONTACTO
        </a>
      </div>
    </div>
  );
};
export default Navbar;

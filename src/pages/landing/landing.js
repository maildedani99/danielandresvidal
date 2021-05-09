import React from "react";
import { NavLink } from "react-router-dom";
import proweb21 from "../../media/logolargow.png";
import repro from "../../media/logonew2.png";
import cifras from "../../media/logo.png";
import styles from "./landing.module.css";
import daniel from "../../media/dani2.png";

const Landing = () => {
  return (
    <div className={styles.__landing}>
    <div className={styles.__navbar}>
      <NavLink className={styles.__navbar_title_link} to="/">
        DANIEL ANDRÉS VIDAL
      </NavLink>
      <div className={styles.__navbar_menu}>
          <a className={styles.__navbar_menu_item} href="#sobremi">SOBRE MÍ</a>
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
    <div className={styles.__sobremi_foto_div}>
      <img
        className={styles.__sobremi_foto}
        src={daniel}
        alt="Foto Daniel Andrés"
      />

      </div>
      <div id="sobremi" className={styles.__sobremi}>
          <h3 className={styles.__sobremi_texto}>
            SOY DESARROLLADOR FULL STACK Y ME DEDICO A LA CREACIÓN DE APLIACIONES Y PÁGINAS WEB. CON LAS TECNOLOGIAS MÁS ACTUALES COMO REACT.JS, NODE.JS, LARAVEL, GIT Y DOCKER ENTRE OTROS...
            <br/>
            {/* <br/>

            ME GUSTA EL TRABAJO EN EQUIPO Y LOS RETOS PROFESIONALES. */}
          </h3>
      </div>
      <div id="servicios" className={styles.__servicios}>
      <div className={styles.__servicios_texto}>
        <h3 className={styles.__servicios_texto_item}>
          DESARROLLADOR<br/> FULL STACK EN<br/> APLICACIONES WEB
        </h3>
        <h3 className={styles.__servicios_texto_item}>
          DISEÑO Y CREACIÓN<br/> DE PÁGINAS Y <br/>APLICACIONES WEB{" "}
        </h3>
        <h3 className={styles.__servicios_texto_item}>
          FORMADOR EN EL<br/> PROYECTO <br/>REPROGRAMATE.CLICK
        </h3>
      </div>
      </div>
      <div id="proyectos" className={styles.__proyectos}>
      <h2 className={styles.__proyectos_title}>
        Algunos proyectos en los que estoy inmerso
      </h2>
      <div className={styles.__proyectos_wrapper}>
        <div className={styles.__proyecto}>
          <img className={styles.__proyectos_img} src={proweb21} alt="" />
        </div>
        <div className={styles.__proyecto}>
          <img className={styles.__proyectos_img} src={repro} alt="" />
        </div>
        <div className={styles.__proyecto}>
          <img className={styles.__proyectos_img} src={cifras} alt="" />
        </div>
      </div>
    </div>
      </div>
  );
};
export default Landing;

import React from "react";
import styles from "./sobremi.module.css";
import daniel from "../../media/daniperfil.png";



const Sobremi = () => {
  return (
    <div className={styles.__sobremi}>
      <img
        className={styles.__sobremi_foto}
        src={daniel}
        alt="Foto Daniel Andrés"
      />
      <h3 className={styles.__sobremi_texto}>
        SOY DESARROLLADOR FULL STACK, ME DEDICO A LA CREACIÓN DE APLIACIONES Y PÁGINAS WEB CON LAS TECNOLOGIAS MÁS ACTUALES COMO REACT.JS, NODE.JS, LARAVEL, GIT Y DOCKER ENTRE OTROS...
            <br />
        <br />

            ME GUSTA EL TRABAJO EN EQUIPO Y LOS RETOS PROFESIONALES.
          </h3>
    </div>
  );
};
export default Sobremi;

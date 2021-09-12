import React from "react";
import styles from "./proyectos.module.css";
import proweb21 from "../../media/logolargow.png";
import repro from "../../media/logonew2.png";
import cifras from "../../media/logo.png";
import health from "../../media/healt.png";

const Proyectos = () => {
  return (
    <div className={styles.__proyectos}>
      <h2 className={styles.__proyectos_title}>
        Algunos proyectos en los que estoy inmerso
      </h2>
      <div className={styles.__proyectos_wrapper}>
        <div className={styles.__proyecto}>
          <a className={styles.__link} target="_blank" href="https://www.proweb21.com">
          <img className={styles.__proyectos_img} src={proweb21} alt="" />
          </a>
        </div>
        <div className={styles.__proyecto}>
        <a className={styles.__link} target="_blank" href="http://www.reprogramate.click">

          <img className={styles.__proyectos_img} src={repro} alt="" />
          </a>
        </div>
        <div className={styles.__proyecto}>
          <a className={styles.__link} target="_blank" href="https://cifras-sin-letras.herokuapp.com/">
          <img className={styles.__proyectos_img} src={cifras} alt="" />
          </a>
        </div>
        <div className={styles.__proyecto}>
          <a className={styles.__link} target="_blank" href="http://healthlive360.com/">
          <img className={styles.__proyectos_img} src={health} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Proyectos;

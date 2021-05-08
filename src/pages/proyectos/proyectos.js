import React from "react";
import styles from "./proyectos.module.css";
import proweb21 from "../../media/logolargow.png";
import repro from "../../media/logonew2.png";
import cifras from "../../media/logo.png";

const Proyectos = () => {
  return (
    <div className={styles.__proyectos}>
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
  );
};
export default Proyectos;

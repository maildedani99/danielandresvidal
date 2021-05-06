import React from "react";
import styles from "./landing.module.css";
import daniel from "../../media/daniel.jpeg";

const Landing = () => {
  return (
    <div className={styles.__sobremi_foto_div}>
      <img
        className={styles.__sobremi_foto}
        src={daniel}
        alt="Foto Daniel Andrés"
      />
    </div>
  );
};
export default Landing;

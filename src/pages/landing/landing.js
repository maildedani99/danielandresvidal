import React from "react";
import styles from "./landing.module.css";
import daniel from "../../media/daniperfil.png";

const Landing = () => {
  
  return (
    <div  className={styles.__sobremi_foto_div}>
    
      <img
        className={styles.__sobremi_foto}
        src={daniel}
        alt="Foto Daniel Andrés"
      />
      <h1 className={styles.__sobremi_saludo}>HOLA,<br/>SOY DANI</h1>
    </div>
  );
};
export default Landing;

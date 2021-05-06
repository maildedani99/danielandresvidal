import React from "react";
import styles from "./servicios.module.css";

const Servicios = () => {
  return (
    <div className={styles.__servicios}>
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
  );
};
export default Servicios;

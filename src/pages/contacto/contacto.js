import React, { useState } from "react";
import styles from "./contacto.module.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import swal from "sweetalert";

const Escribenos = () => {
  init(" user_QBdjWPXBM10KE5Imheg0r ");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1t43jjj",
        "template_qfzbhsc",
        e.target,
        "user_QBdjWPXBM10KE5Imheg0r"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            swal({
              title: "Enhorabuena",
              text: "Tu mail se enviado correctamente",
              icon: "success",
              button: "Aceptar",
            });
          } else {
            swal({
              title: "Lo sentimos",
              text: "Tu mail se no ha podido enviar correctamente",
              icon: "danger",
              button: "Aceptar",
            });
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div className={styles.__escribenos_container}>
        <div className={styles.__escribenos_main}>
          <div className={styles.__escribenos_div_texto}>
            <h2>CONTACTO</h2>
            <h4>
              No dudes en contactarme para
              <br /> cualquier cosa que te parezca
            </h4>
            <br />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/daniel-andrés-vidal
"
            >
              <h6 className={styles.__redes}>linkedin</h6>
            </a>
          </div>
          <div className={styles.__escribenos_div_form_container}>
            <form onSubmit={sendEmail}>
              <div className={styles.__escribenos_div_form}>
                <input
                  className={styles.__escribenos_input_text}
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  required
                />
                <input
                  className={styles.__escribenos_input_text}
                  name="email"
                  type="text"
                  placeholder="Dirección correo electrónico"
                  required
                />
                <input
                  className={styles.__escribenos_input_text}
                  name="telf"
                  type="text"
                  placeholder="Teléfono"
                  required
                />
                <textarea
                  className={styles.__escribenos_input_textarea}
                  name="message"
                  type="text"
                  placeholder="Mensaje"
                  required
                />
                <input
                  className={styles.__escribenos_input_button}
                  type="submit"
                  name="submit"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Escribenos;

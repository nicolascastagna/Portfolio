import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const [sendForm, setSendForm] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_3524d2o",
        "template_5q9yhz6",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3500);
        }
      );
  };

  return (
    <footer className="form-container grid" id="contact">
      <h3>Contact</h3>
      <div className="contain-footer">
        <div className="container-info">
          <div className="contact-info">
            <p>07 50 27 92 16</p>
          </div>
          <div className="contact-info">
            <p>74300 Cluses, France</p>
          </div>
          <div className="contain-icon">
            <div
              className="contact-info icon"
              onClick={() =>
                window.open("https://github.com/nicolascastagna", "_blank") ||
                window.location.replace("https://github.com/nicolascastagna")
              }
            >
              <img src="./images/icon-github.webp" alt="icon-github" />
            </div>
            <div
              className="contact-info icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nicolas-castagna-259bb61b1/",
                  "_blank"
                ) ||
                window.location.replace(
                  "https://www.linkedin.com/in/nicolas-castagna-259bb61b1/"
                )
              }
            >
              <img src="./images/icon-linkedin.webp" alt="icon-linkedin" />
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form ref={form} id="form" autoComplete="off" onSubmit={sendEmail}>
            <ul>
              <div className="align-li">
                <li className="half animated required">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom*"
                    required
                    autoComplete="off"
                  />
                  <label className="input__label"></label>
                </li>
                <li className="half animated required">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    autoComplete="off"
                  />
                  <label className="input__label"></label>
                </li>
              </div>
              <li className="msg animated required">
                <textarea
                  name="message"
                  placeholder="Votre message*"
                  required
                />
                <label className="input__label"></label>
              </li>
              <li className="submit animated">
                <button className="btn-form" type="submit">
                  <div>
                    <span className="background"></span>
                    <span className="base"></span>
                    <span className="text">Envoyer le message</span>
                  </div>
                </button>
              </li>
            </ul>
          </form>
          <div className="form-message"></div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

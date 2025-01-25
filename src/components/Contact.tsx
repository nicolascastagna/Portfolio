import React, { useRef, useState } from "react";
import emailjs, { sendForm } from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_3524d2o",
        "template_5q9yhz6",
        form?.current!,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          setIsLoading(false);
          form?.current?.reset();
          formMess!.innerHTML = "<p class='success'>Message envoyé !</p>";
          setTimeout(() => {
            formMess!.innerHTML = "";
          }, 3500);
        },
        (error) => {
          console.log(error.text);
          formMess!.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";
          setTimeout(() => {
            formMess!.innerHTML = "";
          }, 3500);
        }
      );
  };

  return (
    <footer className="form-container grid" id="contact">
      <h3>Contact</h3>
      <div className="contain-footer">
        <div
          className="container-info"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="contact-info">
            <p>07 50 27 92 16</p>
          </div>
          <div className="contact-info">
            <p>74300 Cluses, France</p>
          </div>
          <div className="contain-icon">
            <div
              className="contact-info icon"
              aria-label="Accédez à mon profil GitHub"
              onClick={() =>
                window.open("https://github.com/nicolascastagna", "_blank") ||
                window.location.replace("https://github.com/nicolascastagna")
              }
            >
              <img src="./images/icon-github.webp" alt="icone github" />
            </div>
            <div
              className="contact-info icon"
              aria-label="Accédez à mon profil Linkedin"
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
              <img src="./images/icon-linkedin.webp" alt="icone linkedin" />
            </div>
            <div
              className="contact-info icon"
              aria-label="Accédez à mon profil Malt"
              onClick={() =>
                window.open(
                  "https://www.malt.fr/profile/nicolascastagna/",
                  "_blank"
                ) ||
                window.location.replace(
                  "https://www.malt.fr/profile/nicolascastagna/"
                )
              }
            >
              <img src="./images/malt-logo.svg" alt="icone malt" />
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form ref={form} id="form" autoComplete="off" onSubmit={sendEmail}>
            <ul className="align-li">
              <li className="half animated required">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nom*"
                  required
                  autoComplete="off"
                  aria-required="true"
                />
                <label htmlFor="name" className="input__label"></label>
              </li>
              <li className="half animated required">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  autoComplete="off"
                  aria-required="true"
                />
                <label htmlFor="email" className="input__label"></label>
              </li>
            </ul>
            <ul>
              <li className="msg animated required">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre message*"
                  required
                  aria-required="true"
                />
                <label htmlFor="message" className="input__label"></label>
              </li>
              <li className="submit animated">
                {isLoading ? (
                  <div>
                    <span className="background"></span>
                    <span className="base"></span>
                    <button disabled className="btn-form text disable-btn">
                      En cours d'envoi
                    </button>
                  </div>
                ) : (
                  <div>
                    <span className="background"></span>
                    <span className="base"></span>
                    <button
                      className="btn-form text"
                      aria-label="Envoyez les informations"
                      type="submit"
                    >
                      Envoyer le message
                    </button>
                  </div>
                )}
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

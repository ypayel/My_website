import React, { useState } from "react";
import "./ForumMain.scss";
import PopOut from "../../PopOut/PopOut";

export const ForumMain = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [clicked, setClicked] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "To pole jest wymagane";
    if (!lastName.trim()) newErrors.lastName = "To pole jest wymagane";
    if (!email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Wprowadź poprawny adres e-mail";
    if (!message.trim()) newErrors.message = "To pole jest wymagane";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setMessageSent(true);

    if (!validateForm()) return;

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "ebce81e6-d97f-4114-b6cb-a242d2ac7153");

    const object = Object.fromEntries(formData.entries());
    console.log("Wysyłane dane (FormData):", object);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Wiadomość została wysłana!", result);
        setClicked(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        console.error("Błąd podczas wysyłania formularza", result);
      }
    } catch (error) {
      console.error("Wystąpił błąd:", error);
    }
  };

  return (
    <>
      <div className="form-main-conteiner">
        <form className="form-contact" onSubmit={handleSubmit}>
          <h2 className="form-first-header">Contact Me</h2>
          <p className="contact-welcometext">Feel free to reach out!</p>
          <div className="form-name-main">
            <div className="form-group">
              <label className="form-first-name-header" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`form-first-input ${
                  errors.firstName ? "error" : ""
                }`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <span className="form-error-text-first-input">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="form-group">
              <label className="form-last-name-header" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`form-last-input ${errors.lastName ? "error" : ""}`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <span className="form-error-text-last-input">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-email-header">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-email-input ${errors.email ? "error" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="form-error-text-email-input">
                {errors.email}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-message-header">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`form-message-input ${errors.message ? "error" : ""}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && (
              <span className="form-error-text-message">{errors.message}</span>
            )}
          </div>
          <PopOut messageSent={clicked} setMessageSent={setClicked} />
          <div className="form-submit-button-conteiner">
            <button
              className={`form-submit-button ${clicked ? "clicked" : ""}`}
              type="submit"
              onClick={() => console.log("Kliknięto przycisk")}
            >
              Send Message
            </button>
          </div>

          <div className="info-conteiner">
            <p className="contact-e-mail">kukankouartsiom@gmail.com</p>
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/artsiom-kukankou/"
                className="contact-link"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "images/linkedin.png"}
                  alt="linkedin"
                  className="contact-linkedin-image"
                />
              </a>
              <a
                href="https://github.com/ypayel"
                className="contact-link"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "images/github.png"}
                  alt="github"
                  className="contact-github-image"
                />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ForumMain;

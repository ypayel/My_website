import React, { useState, useEffect } from "react";
import "./ForumMain.scss";
export const ForumMain = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log("Stan messageSent został zmieniony:", messageSent);
  }, [messageSent]);
  

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "To pole jest wymagane";
    if (!lastName.trim()) newErrors.lastName = "To pole jest wymagane";
    if (!email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Wprowadź poprawny adres e-mail";
    if (!message.trim()) newErrors.message = "To pole jest wymagane";
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setClicked(true);

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
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        console.log("Wiadomość została wysłana!", result);
        setMessageSent(true);
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
        <form  className="form-contact" onSubmit={handleSubmit}>
          <h2 className="form-first-header">Contact Me</h2>
          <div className="form-name-main">
            <div className="form-headers-conteiner">
              <h3 className="form-first-name-header">
                First Name <span className="form-text-star">*</span>
              </h3>
              <h3 className="form-last-name-header">
                Last Name <span className="form-text-star">*</span>
              </h3>
            </div>
            <div className="form-name-inputs-conteiner">
              <input type="text" name="firstName" className={`form-first-input ${errors.firstName ? "error" :""}`} alt="first-name"  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              {errors.firstName && <span className="form-error-text-first-input">{errors.firstName}</span>}
              <input type="text" name="lastName" className={`form-last-input ${errors.lastName ? "error" : ""}`} alt="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              {errors.lastName && <span className="form-error-text-last-input">{errors.lastName}</span>}
            </div>
          </div>
          <div className="form-email-main">
            <div className="form-email-header-conteiner">
              <h3 className="form-email-header">
                Email Adress <span className="form-text-star">*</span>
              </h3>
            </div>
            <div className="form-email-input-conteiner">
              <input type="text" name="email" className={`form-email-input ${errors.email ? "error" : ""}`} value={email}  onChange={(e) => setEmail(e.target.value)} alt="email" />
              {errors.email && <span className="form-error-text-email-input">{errors.email}</span>}
            </div>
          </div>
          
          <div className="form-message-conteiner">
              <h3 className="form-message-header">
                Message <span className="form-text-star">*</span>
              </h3>
            <div className="form-message-input-conteiner">
              <textarea name="message" value={message} className={`form-message-input ${errors.message ? "error" : ""}`}  onChange={(e) => setMessage(e.target.value)}></textarea>
              {errors.message && <span className="form-error-text-message">{errors.message}</span>}
            </div>
          </div>
          {messageSent && (
        <div className="form-success-message" >
          <strong className="form-message-strong">Message Sent!</strong>  
          <p className="form-message-success-paragraf">
            Thanks for completing the form. We will be in touch soon!
          </p>
        </div>
      )}
          <div className="form-submit-button-conteiner">
          <button
          className={`form-submit-button ${clicked ? 'clicked' : ''}`}
          type="submit"
          onClick={() => console.log("🟡 Kliknięto przycisk")}
        >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
  
};
export default ForumMain;

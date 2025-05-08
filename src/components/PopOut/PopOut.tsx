import React, { useEffect } from "react";
import "./PopOut.scss";

interface PopOutProps {
  messageSent: boolean;
  setMessageSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopOut: React.FC<PopOutProps> = ({ messageSent, setMessageSent }) => {
  useEffect(() => {
    console.log("Stan messageSent został zmieniony:", messageSent);
  }, [messageSent]);

  if (!messageSent) return null;

  return (
    <div className="popout-overlay">
      <div className="popout-content">
       
        <div className="form-success-message">
        <button
          className="popout__close"
          onClick={() => setMessageSent(false)}
        >x</button>
          <strong className="form-message-strong">Message Sent!</strong>
          <p className="form-message-success-paragraf">
            Thanks for completing the form. We will be in touch soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopOut;

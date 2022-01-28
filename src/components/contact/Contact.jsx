import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y5fnfa3",
        "template_9t1its1",
        formRef.current,
        "user_hVdjYQblIx1fBfv9PflSp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss our project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" /> +7 926 702 2166
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />{" "}
              necati.soyata@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" /> Moscow / Russian
              Federation
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>what is your story?</b> Get in touch you can be my freelancer
            hero
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && "Thank you"}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;

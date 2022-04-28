import React, { useState} from "react";
import "./contact.scss";
import axios from "axios";

function Contact() {
  const initialValues = { username: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(formErrors).length !== 0){
      handleChange();
    }
    else{
      setIsSubmit(true);
      if(isSubmit){
        const contact = {
          username: formValues.username,
          email: formValues.email,
          message: formValues.message,
        };
        axios
          .post(`http://localhost:3001/api/v1/contact`, contact)
          .then((res) => {
            if (res.data.mailSent) {
              setFormValues(initialValues);
              window.alert("Your response is Saved");
            }
          });
      }
    }
  };
 

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!!";
    }

    if (!nameRegex.test(values.username)) {
      errors.username = "Not a valid name!!";
    }

    if (!values.email) {
      errors.email = "Email is required!!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Not a valid email format!!";
    }

    if (!values.message) {
      errors.message = "Message is required!!";
    }

    return errors;
  };
  
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="outerRow">
        <div className="contactRow">
          <div className="contactInfo">
            <div className="icon-info">
              <div className="title">My Details</div>
            </div>
          </div>
          <div className="contactInfo">
            <div className="icon-info">
              <i className="fa fa-map-marker"></i>
              <span>Address</span>
            </div>
            <div className="text-info">
              <span>New Baneshwor,Kathmandu</span>
            </div>
          </div>

          <div className="contactInfo">
            <div className="icon-info">
              <i className="fa fa-envelope"></i>
              <span>Email</span>
            </div>
            <div className="text-info">
              <span>ashishxhetry2017@gmail.com</span>
            </div>
          </div>

          <div className="contactInfo">
            <div className="icon-info">
              <i className="fa fa-phone"></i>
              <span>Phone</span>
            </div>
            <div className="text-info">
              <span>+977-9844443633</span>
            </div>
          </div>
        </div>

        <div className="formRow">
          <div className="formTitle">
            <span>Get In Touch</span>
            <p>Feel free to Message me..</p>
          </div>
          <div className="formInput">
            <form action="" >
              <input
                type="text"
                name="username"
                placeholder="Enter username.."
                value={formValues.username}
                onChange={handleChange}
                onBlur={() =>validate(formValues)}
              />
              <span style={{ color: "red" }}>{formErrors.username}</span>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address.."
                value={formValues.email}
                onChange={handleChange}
                onBlur={() => validate(formValues)}
              />
              <span style={{ color: "red" }}>{formErrors.email}</span>
              <textarea
                id="subject"
                name="message"
                placeholder="Write something.."
                value={formValues.message}
                onChange={handleChange}
                onBlur={() => validate(formValues)}
              ></textarea>
              <span style={{ color: "red" }}>{formErrors.message}</span>
              <button onClick={handleSubmit}>
               Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

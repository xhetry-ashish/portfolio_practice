
import React, { useState } from 'react'
import './contact.scss'


function Contact() {


const initialValues= {username:'', email:'', message:''};
const [formValues,setFormValues]= useState(initialValues);
const [formErrors,setFormErrors]= useState({});
const [isSubmit,setIsSubmit] = useState(false);


const handleChange = (e) => {
  
  const {name, value } = e.target;
  setFormValues({...formValues,[name]:value});

}

const handleSubmit = (e)=>{
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
  if(Object.keys(formErrors).length === 0 && isSubmit)
  {
    window.alert(`${formValues.email},${formValues.message},${formValues.username}`);
    setFormValues(initialValues);
  }
  

}

// useEffect(()=>{
//   // console.log(formErrors);
//   if(Object.keys(formErrors).length === 0 && !isSubmit)
//   {
//     window.alert(`${formValues.email},${formValues.message},${formValues.username}`);
//   }
// })

const validate = (values)=>{
  const errors ={};
  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if(!values.username)
  {
    errors.username = "Username is required!!"
  }

 if (!nameRegex.test(values.username)) {
    errors.username = "Not a valid name!!";
  }
  

  if(!values.email)
  {
    errors.email = "Email is required!!"
  }
  else if (!emailRegex.test(values.email)) {
    errors.email = "Not a valid email format!!";
  }

  if(!values.message)
  {
    errors.message = "Message is required!!"
  }

  return errors;

}
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
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username.."
                  value={formValues.username}
                  onChange={handleChange}
                />
                <span style={{color:"red"}}>{formErrors.username}</span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address.."
                  value={formValues.email}
                  onChange={handleChange}
                />
                <span style={{color:"red"}}>{formErrors.email}</span>
                <textarea
                  id="subject"
                  name="message"
                  placeholder="Write something.."
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
                 <span style={{color:"red"}}>{formErrors.message}</span>
                <button ><i className="fa fa-paper-plane"></i>  Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
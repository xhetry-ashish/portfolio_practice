
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
  // setFormValues(initialValues);

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

  else if (!nameRegex.test(values.email)) {
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
      <div class="outerRow">
        <div class="contactRow">
          <div class="contactInfo">
            <div class="icon-info">
              <h3>My Info</h3>
            </div>
          </div>
          <div class="contactInfo">
            <div class="icon-info">
              <i class="fa fa-map-marker"></i>
            </div>
            <div class="text-info">
              <span>New Baneshwor</span>
            </div>
          </div>

          <div class="contactInfo">
            <div class="icon-info">
              <i class="fa fa-envelope"></i>
            </div>
            <div class="text-info">
              <span>ashishxhetry2017@gmail.com</span>
            </div>
          </div>

          <div class="contactInfo">
            <div class="icon-info">
              <i class="fa fa-phone"></i>
            </div>
            <div class="text-info">
              <span>+977-9844443633</span>
            </div>
          </div>
        </div>

        <div class="formRow">
          <div class="formempty"></div>
          <div class="forminfo">
            <div class="formTitle">
              <span>Get in Touch</span>
              <p>Feel free to Message me..</p>
            </div>
            <div class="formInput">
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username.."
                  value={formValues.username}
                  onChange={handleChange}
                />
                <p style={{color:"red"}}>{formErrors.username}</p>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address.."
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p style={{color:"red"}}>{formErrors.email}</p>
                <textarea
                  id="subject"
                  name="message"
                  placeholder="Write something.."
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
                <p style={{color:"red"}}>{formErrors.message}</p>
                <button ><i class="fa fa-paper-plane"></i>  Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
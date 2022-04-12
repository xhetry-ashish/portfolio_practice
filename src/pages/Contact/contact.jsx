import React from 'react'

import './contact.scss'

function contact() {
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
              <form action="">
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your full name.."
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                ></textarea>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
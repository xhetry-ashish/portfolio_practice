import React from "react";
import './services.scss'
import node from '../../assets/image/nodejs.jpg'

function testimonial() {
  return (
    <div>
      <h2>My Services</h2>
      <div className="ser-container">
        <div className="ser-col">
          <div className="ser-img">
            <img src={node} alt=''></img>
          </div>
          <span className="title">Mobile App Development</span>
          <span className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam atque consequatur asperiores aut nemo sequi quidem at 
          quasi perferendis temporibus dolore nesciunt fuga, architecto fugit iure quam! Assumenda, velit! </span>
        </div>

        <div className="ser-col">
          <div className="ser-img">
            <img src={node} alt=''></img>
          </div>
          <span className="title">Web App Development</span>
          <span className="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ratione doloribus beatae possimus! Saepe quia culpa hic aut.
           Labore assumenda atque quibusdam facilis, rerum error vitae quidem totam consequuntur doloribus? </span>
        </div>

        <div className="ser-col">
          <div className="ser-img">
            <img src={node} alt=''></img>
          </div>
          <span className="title">QA</span>
          <span className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ea iusto, illo, exercitationem culpa vitae officia incidunt 
          dolores explicabo quos neque minima commodi eaque laudantium tempore optio doloremque debitis repellendus. </span>
        </div>

      </div>
    </div>
  );
}

export default testimonial;

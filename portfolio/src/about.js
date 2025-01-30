
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
      As a passionate and detail-oriented Full-Stack Developer, I specialize in building dynamic, scalable web applications using both front-end and back-end technologies. With proficiency in HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB and PostgreSQL, I focus on creating seamless user experiences while optimizing performance and security. From the initial wireframe to deployment, I am committed to delivering end-to-end solutions tailored to meet client needs. Always staying up-to-date with the latest industry trends, I strive to create clean, maintainable code and user-friendly interfaces that enhance both functionality and design
      </p>

      <div className="about-details">
        <h2 className="details-title">Area of Interest</h2>
        <p className="details-content">Front end Developer</p>
        <p className="details-content">Web Development</p>

        <h2 className="details-title">Hobbies</h2>
        <p className="details-content">Volunteering/Teaching</p>
        <p className="details-content">Problem Solving & Algorithms</p>
        <p className="details-content">Exploring New Tech</p>
      </div>

      <div className="additional-section">
        <h2 className="additional-title">Future Goals</h2>
        <p className="additional-content">
        In the long term, I aspire to leverage the knowledge and skills gained through hands-on experience in the industry to start my own startup. I am passionate about creating innovative solutions that address real-world challenges, and I aim to build a product that enhances both user experience and business growth. Over the next few years, I plan to gain exposure to various aspects of development, from product management to scaling applications, while also learning how to navigate the complexities of running a business. My ultimate goal is to combine technical expertise with entrepreneurial spirit to create something impactful in the tech world.
        </p>
      </div>
    </div>
  );
}

export default About;


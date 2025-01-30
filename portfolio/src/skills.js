import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      
      <div className="skills-category">
        <h3>Programming Languages</h3>
        <ul>
          <li><span>C</span> <progress value="80" max="100"></progress></li>
          <li><span>JavaScript</span> <progress value="90" max="100"></progress></li>
          <li><span>HTML & CSS</span> <progress value="85" max="100"></progress></li>
          <li><span>C++</span> <progress value="75" max="100"></progress></li>
          <li><span>Python</span> <progress value="88" max="100"></progress></li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Tools & Technologies</h3>
        <ul>
          <li><span>VS Code</span> <progress value="90" max="100"></progress></li>
          <li><span>Git & GitHub</span> <progress value="85" max="100"></progress></li>
          <li><span>Canva</span> <progress value="80" max="100"></progress></li>
          <li><span>Node.js</span> <progress value="70" max="100"></progress></li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Soft Skills</h3>
        <ul>
          <li><span>Problem Solving</span> <progress value="95" max="100"></progress></li>
          <li><span>Teamwork</span> <progress value="90" max="100"></progress></li>
          <li><span>Communication</span> <progress value="85" max="100"></progress></li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;

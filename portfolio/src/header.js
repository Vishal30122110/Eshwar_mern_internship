import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Projects } from './projects';
import  About  from './about';
import  Skills  from './skills';
import {Home} from './home';
import { Contact } from './contact';
import './header.css';
export const Header = () => {
  return (
    <Router>
      <center>
    <div className="App">
      <nav>
        <div className='h1'>
          <Link to="/home">Home</Link>
        </div>
        <div className='a1'>
          <Link to="/about">About</Link>
        </div>
        <div className='p1'>
          <Link to ="/projects">Projects</Link>
        </div>
        <div className='s1'>
          <Link to="/skills">Skills</Link>
        </div>
        <div className='c1'>
          <Link to="/contact">Contacts</Link>
        </div>
      </nav>
      <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/skills" Component={Skills} />
          <Route path='/contact' Component={Contact} />
      </Routes>
      </div>
      </center>
      </Router>
  )
}


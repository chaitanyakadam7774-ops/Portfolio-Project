import React from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import Project from './Project.jsx'
import './App.css'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";

import{Route,Routes,NavLink} from 'react-router-dom'
const App = () => {
  return (
    <div className='ab'>
      <div className='aa'>
        <NavLink to='/' className='kk'><FaHome /></NavLink>
        <NavLink to='/about'className='kk'><FcAbout /></NavLink>
        <NavLink to='/skills'className='kk'><GiSkills /></NavLink>
        <NavLink to='/project'className='kk'><FaProjectDiagram /></NavLink>
        <NavLink to='/contact'className='kk'><RiContactsBook3Fill /></NavLink>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/skills' element={<Skills></Skills>}></Route>
          <Route path='/project' element={<Project></Project>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
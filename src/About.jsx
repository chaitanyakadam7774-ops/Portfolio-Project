import React from 'react'
import './About.css'
import logo from './image.png'
const About = () => {
  return (
    <div className='gf'>
        <div><img src={logo} alt="" style={{height:'300px',width:'300px',marginTop:'30px',border:'1px',borderRadius:'50px'}}/></div>
      <div>
        <div className='ty'>
          <h1>About Me</h1>

          <h2>Hi, I'm Chaitanya Kadam 👋</h2>

          <p>
            I am a student and aspiring web developer.
            I enjoy creating websites and learning new technologies.
          </p>

          <h3>My Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>

          <h3>My Goal</h3>
          <p>
            My goal is to become a skilled full-stack developer
            and build useful web applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
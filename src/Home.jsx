import React from 'react'
import './Home.css'
import logo from './image.png'
const Home = () => {
  return (
    <div className='tata'>
    <div className='tt'>
        <div className='rr'>
        <div className='bb'><span>Hi,i'm 👋</span><br /></div>
        <div className='iam'>
            
            <b>Chaitanya Kadam</b><br />
            <b>React Developer</b>
        </div><br /><br />
        <div className='gg'><span>React is a JavaScript library used to build user interfaces (UI), especially for websites and web applications. It was created by Facebook (now Meta).

React is not a programming language. You write React applications mainly using JavaScript or TypeScript.</span></div>
        </div>
        <div className='dd'>
        <img src={logo} alt="" style={{border:'1px',borderRadius:'30px'}}/>
        </div>
    </div>
    
    </div>
  )
}

export default Home
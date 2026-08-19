import React from 'react'
import './Contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";



const Contact = () => {
  return (
    <div>
     <div className='contact'>
      <h2>Contact Us</h2>
      <form action="">
        
        <input type="text" placeholder='Enter Your Name' /><br />

        <input type="email" placeholder='Enter Your Email' /><br />

        <input type="tel" placeholder='Enter Your Phone' /><br />
        
        <textarea name="Message" id="" placeholder='Enter Your Message'></textarea><br />

        <button type='submit'>Send Message</button>
        </form>
     </div>
     <div class="social-container">

        <h2>Connect With Me</h2>

       <span>Instagram</span>
        <a href="https://www.instagram.com/_chaitanya_18"
           target="_blank"
           class="social-box instagram">

            <div class="social-icon">
                <i class="fa-brands fa-instagram"></i><FaInstagram />

            </div>

            <div class="social-info">
                <h3>Instagram</h3>
                <p>@_chaitanya_18</p>
            </div>

        </a>


        <span>Facebook</span>
        <a href="https://www.facebook.com/chaitanya__59"
           target="_blank"
           class="social-box facebook">

            <div class="social-icon">
                <i class="fa-brands fa-facebook-f"></i><FaFacebook />

            </div>

            <div class="social-info">
                <h3>Facebook</h3>
                <p>chaitanya__59</p>
            </div>

        </a>


       <span>Linkedin</span>
        <a href="https://www.linkedin.com/in/yourusername"
           target="_blank"
           class="social-box linkedin">

            <div class="social-icon">
                <i class="fa-brands fa-linkedin-in"></i><FiLinkedin />

            </div>

            <div class="social-info">
                <h3>LinkedIn</h3>
                <p>Chaitanya Kadam</p>
            </div>

        </a>


        <span>Github</span>
        <a href="https://github.com/chaitanyakadam7774-ops"
           target="_blank"
           class="social-box github">

            <div class="social-icon">
                <i class="fa-brands fa-github"></i><FaGithub />

            </div>

            <div class="social-info">
                <h3>GitHub</h3>
                <p>@chaitanyakadam7774-ops</p>
            </div>

        </a>

    </div>

    </div>
   
  )
}

export default Contact
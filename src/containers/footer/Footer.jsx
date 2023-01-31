import React from 'react';
import './footer.css';
import logo from '../../assests/Logo-1.svg';
import SocialFollow from "./SocialFollow"

const Footer = () => {
  return (
    <div className='jump__footer section__padding'>
      <div className='jump__footer-heading'>
      <h1>Take the journey with us, lets start the conversation</h1>
      </div>
      <div className='jump__footer-btn'>
        <button type='button'>Let's Talk</button> 
        </div>

        <div  className="jump__footer-links">
          <div className='jump__footer-links_logo_image'>
        <img src={logo} alt="logo" />
          </div>
        <div className='jump__footer-links_logo'>
        <p>Unit 241  Jümp Suit  <br /> 56 Broadwick Street  <br /> W1F 9AB</p>
          </div> 

          <div className='jump__footer-links_div' id="social">
            <h4>Socials</h4>
            <SocialFollow />
          </div>

          <div className='jump__footer-links_div'>

            <h4>Company</h4>
              <p>Privacy policy</p>
              <p> Team </p>
              <p>Terms Conditions</p>

          </div>

            <div className='jump__footer-links_div'>

            <h4>Contact</h4>
              <p>info@jümp.co.uk</p>
              <p> 01223 45532</p>
              <p>FAQ</p>
            </div>

        </div>
        

      <div className='jump__footer-copyright'>
      <p>&#xA9; 2023 Jümp. All rights reserved</p>
    </div>

    </div>


  )
}

export default Footer
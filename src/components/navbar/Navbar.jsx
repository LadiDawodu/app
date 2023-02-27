import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assests/Logo-1.svg';
import './navbar.css';
import { useState } from 'react';






const Menu = () => (
  <>
  <p><a href='#home'> WORK</a></p>
  <p><a href='#press'>PRESS</a></p>
  <p><a href='#consulting'>CONSULTING</a></p>
  <p><a href='#blog'>BLOG</a></p>
  <p><a href='#about'>ABOUT</a></p>
  
  
  </>

)
//Check out BEM (Block Element Modifier)
const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);
  return (
    <div className="jump__navbar">
        <img src={logo} alt="logo" />
      <div className='jump__navbar-links'>
        <div className='jump__navbar-links_logo'>

        </div>
        <div className="jump__navbar-links_container">
                <Menu/>
              </div>

        </div>
        <div className="jump__navbar-sign">
          <a href="mailto:info@jump.com">
          <button type="button">Let's Talk</button>

          </a>
        </div>
        <div className='jump__navbar-menu'>
          {toggleMenu
          ? <RiCloseLine  color="rgb(0, 0, 0)" size={27} onClick={() => setToggleMenu(false)}/>
          :<RiMenu3Line color="rgb(8, 7, 7)" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu  && (
            <div className='jump__navbar-menu_container scale-up-center'>
              <div className='jump__navbar-menu_container-links'>
              <Menu/>

                        </div>
                          </div>
          )}
        


      </div>

    </div>
  )
}

export default Navbar
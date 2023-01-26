import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assests/Logo-1.svg';
import './navbar.css';
import { useState } from 'react';


// making the menu sectoin a function so it can be called at any time instead of writing it again and again




const Menu = () => (
  <>
  <p><a href='#home'> WORK</a></p>
  <p><a href='#press'>PRESS</a></p>
  <p><a href='#consulting'>CONSULTING</a></p>
  <p><a href='#service'>SERVICES</a></p>
  <p><a href='#about'>ABOUT</a></p>
  
  
  </>

)
//Check out BEM (Block Element Modifier)
const Navbar = () => {
  const [toggleMenu, setToggleMenu ] = useState(false);
  return (
    <div className='jump__navbar' id="NavBar">
      <img src={logo} alt="logo" />
      <div className='jump__navbar-links'>
        <div className="jump__navbar-links_logo">
          
            </div>
            
              <div className="jump__navbar-links_container">
                <Menu/>
              </div>

        </div>
        <div className="jump__navbar-sign">

          <button type="button">Let's Talk</button>
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
                <div className="jump__navbar-menu_container-links-sign">
               
                      </div>
                        </div>
                          </div>
          )}
        </div>
    </div>
  )
}

export default Navbar
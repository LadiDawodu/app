import React from 'react';
import './header.css';
import jump from '../../assests/hero.jpeg'

const Header = () => {
  return (
    <div className='jump__header section__padding' id="home">
      <div className='jump__header-content'>
        <h1 className='gradient__text'>Create<br></br> Digital <br></br> Innovations.</h1>
        <p>Allow us to create. Become digital with us. Innovation is possibility.</p>
        {/*<div className='jump__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
        </div>
  <button type="button"> MAKE IT HAPPEN</button>*/}

        <div className='jump__header-image'>
          <img src={jump} alt="jümp" /> 
        </div>
      </div>
    </div>
  )
}

export default Header
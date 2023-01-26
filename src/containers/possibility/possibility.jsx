import React from 'react';
import './possibility.css';
import logos  from '../../assests/strong.png';
const Possibility = () => {
  return (
    <div className='jump__possibility section__padding' id="consulting">
      <div className='jump__possibility-image'>
        <img src={logos} alt="consulting" />
      </div>
      <div className='jump__possibility-content'>
        <h4>Think outside the box, we'll design the rest.</h4>
        <h1>Creativity is destination, imagination is a standard.</h1>
        <p>Whether it's opposite, dynamic or straight, creativity is a road through boundaries. Let us walk down that road together</p>
      </div>
    </div>
  )
};

export default Possibility
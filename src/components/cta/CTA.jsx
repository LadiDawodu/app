import React from 'react';
import './cta.css';
import { useState } from 'react';
  
  const CTA = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
    return (
    <div className='jump__cta'>
      <div className='jump__cta-content'>
        <p>Everything stands out, when you follow the road for everyone</p>
        <h3>A premium service, for every user.<br/> That's design, it's time to see creativity in the world of logic </h3>  
      </div>
        <div className='jump__cta-btn'>
          
          <a href="mailto:info@jump.com">
        <button onClick={handleClick}type='button'>start here</button> 
          </a>
        </div>
    </div>
  )
}

export default CTA;
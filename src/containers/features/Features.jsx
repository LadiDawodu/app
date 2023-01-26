import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const Features = ({title,text}) => {
  return (
    <div className='jump__features section__padding' id="features"> 
    <div className='jump__features-heading'>
      <h1>A modern digital outlook with compelling immersive experiences. A modern digital outlook.</h1>
      <p> Digital inovation is communication</p>
    </div>
        <div className='jump__features-containers-text'>
    <div className='break' />
      <Feature title="Challenge" text="See it, know it, believe it. Symbiosis is birthed in uncertainty " />
      <Feature title="Communicate" text="Communicate to the world, speak the language."   />
      <Feature title="Release" text="Freedorm of design is liberation of idea"  />
    </div>
    <p>   
    {text}</p>
    <h1>{title}</h1>
    </div>
  )
}

export default Features
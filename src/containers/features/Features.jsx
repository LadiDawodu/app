import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const Features = ({title,text}) => {
  return (
    <div className='jump__features section__padding' id="press"> 
    <div className='jump__features-heading'>
      <h1>Modern digital outlook with compelling experiences. <br /> It's a digital outlook.</h1>
      <div className='jump__features-heading-h3'>
      <h3> Digital inovation <br /> is communication</h3>
      </div>
    </div>
        <div className='jump__features-containers-text'>

      <Feature title="Challenge" text="See it, know it, believe it. Symbiosis is birthed in uncertainty " />

      <Feature title="Communicate" text="Communicate to the world, speak the language."   />
      
      <Feature title="Release" text="Freedorm of design is liberation of idea"  />
    </div>
          <div />
    <p>   
    {text}</p>
    <h1>{title}</h1>
    </div>
  )
}

export default Features
import React from 'react';
import './brand.css';
import {  abstract, inmotion, invision, superfood, visionstudio, exes } from './import';

const Brand = () => {
  return (
    <div className='jump__brand section__padding'>
      
      <div>
          <img src={abstract} alt="abstract" />
      </div>

      <div>
          <img src={inmotion} alt="inmotion" />
      </div>

      <div>
          <img src={invision} alt="invision" />
      </div>

      <div>
          <img src={superfood} alt="superfood" />
      </div>

      <div>
          <img src={visionstudio} alt="visionstudio" />
      </div>

      <div>
          <img src={exes} alt="exes" />
      </div>

    </div>
  )
}

export default Brand
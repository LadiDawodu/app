import React from 'react';
import  Feature from '../../components/feature/Feature';
import './whatpage.css';

const Whatpage = () => {
  return (
    <div className='jump__whatpage section__margin' id="abt">
      <div className='jump__whatpage-heading'>
        <h1> Let's create your next big project together.</h1>

      </div>
      <div className='jump__whatpage-feature'>
      <Feature title="Who are we?" text="We are a dynamic and innovative creative agency that is passionate about delivering exceptional results for our clients.  Our team is made up of a diverse group of experts including designers, developers, marketers and creative thinkers who work together to bring your ideas to life." />
      </div>
      <div className='jump__whatpage-container '>

        <Feature title="App Design" text="At our creative agency, we specialize in designing visually stunning and user-friendly mobile apps. Our team of experienced designers and developers work closely with clients to understand their unique needs and create a personalized solution." />
        <Feature title="Web Design" text="Specialized in crafting visually stunning and user-friendly websites that help businesses stand out online. Our team of experienced designers and developers work closely with clients to understand their unique needs and create a personalized solution."   />
        <Feature title="Webflow" text="We're experts in using Webflow to design and develop beautiful, responsive websites that are tailored to your unique needs. Webflow is a powerful platform that allows us to create custom, dynamic websites without writing any code."  />
      </div>
    </div>
  )
}

export default Whatpage;
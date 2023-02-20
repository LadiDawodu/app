import React from "react";


import{
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function   
SocialFollow() {
  return (
    <div className="social-container">
      <p><a href="https://twitter.com/?lang=en"> 
      <FontAwesomeIcon icon={faTwitter} size="1x" /></a>
        </p>

        <p>
          
      <a href="https://www.instagram.com/"> 
      <FontAwesomeIcon icon={faInstagram} size="1x" /></a>
        </p>

          <p>
      <a href="https://uk.linkedin.com/">  
      <FontAwesomeIcon icon={faLinkedin} size="1x" /></a>

          </p>



    </div>
  );
}
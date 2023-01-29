import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import{
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';



export default function SocialFollow() {
  return (
    <div className="social-container">
      <p><a href="#"> 
      <FontAwesomeIcon icon={faTwitter} size="1x" /></a>
        </p>

        <p>
          
      <a href="#"> 
      <FontAwesomeIcon icon={faInstagram} size="1x" /></a>
        </p>

          <p>
      <a href="#">  
      <FontAwesomeIcon icon={faLinkedin} size="1x" /></a>

          </p>



    </div>
  );
}
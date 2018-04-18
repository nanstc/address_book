//This is the contact that appears in the contact list
//Clicking on the contact will render the info on the mail window
import React from 'react';

const Contact={{onClick, toggled, text}} => (
  <li 
    onClick={onClick}
    className={toggled? 'toggledContact': 'contact'}
  >
    {text}
  </li>  
)

export default Contact; 

//This is the contact that appears in the contact list
//Clicking on the contact will render the info on the mail window
import React from 'react';
import './Contact.css';

const Contact=({onClick, activeContact, contact}) => (
  <li 
    onClick={onClick}
    className="contact"
    style={ (contact.contactId === activeContact)? {'backgroundColor': '#B4B4B4'}: {'backgroundColor':'#CCCCCC'}}
  >
  {contact.lastname}, {contact.firstname}
  </li>   
)

export default Contact; 

import React from 'react';
import Contact from './contact';


const ContactList = ({contacts, toggleContacts}) => (
  <ul>
    {contacts.map(contact => 
        <Contact 
          {...contact}
          onClick={() => toggleContacts(contact.id)} 
        />
    )}
  </ul>   
)

export default ContactList;

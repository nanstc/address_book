import React from 'react';
import Contact from './Contact'
import './ContactList.css'

const ContactList = ({contacts, activeContact, toggleContact}) => (
  <ul>
    { contacts.map(contact => 
        <Contact 
          key={contact.contactId}
          contact={contact}
          activeContact={activeContact} 
          onClick={() => {
            toggleContact(contact)
          }} 
        />
    )}
  </ul>   
)

export default ContactList;

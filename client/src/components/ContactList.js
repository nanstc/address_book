import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import './ContactList.css';

const ContactList = ({contacts, activeContact, toggleContact}) => (
  <ul>
    { contacts.map(contact =>
        <Link 
          key={contact.contactId}
          to={"/contacts/firstname=" + contact.firstname + "&lastname=" + contact.lastname}>
          <Contact 
          key={contact.contactId}
          contact={contact}
          activeContact={activeContact} 
          onClick={() => {
            toggleContact(contact)
          }} 
        />
        </Link>
    )}
  </ul>   
)

export default ContactList;

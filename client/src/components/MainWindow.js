import React from 'react'; 
import './MainWindow.css'

const MainWindow = ({contact}) => {
  if (typeof contact === 'undefined') console.log(contact)
  return(
  (typeof contact === 'undefined')
  ?(
  <div className="mainWindow">
    <button> edit </button>
    <div className="contactInfo"> no contact selected </div>
  </div>)
  :( <div className="mainWindow">
      <button> edit </button>
      <div className="contactInfo"> {contact.firstname}, {contact.lastname} </div>
      <div className="contactInfo"> Phone: {contact.phone}</div>
      <div className="contactInfo"> Email: {contact.email} </div>
      <div className="contactInfo"> Address: {contact.address}</div>
    </div>
   )
)}

export default MainWindow;

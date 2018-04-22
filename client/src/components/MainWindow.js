import React from 'react'; 
import './MainWindow.css'

const MainWindow = ({contact, inEditState, edit, save}) => {
  if (typeof contact === 'undefined') console.log(contact)
  return(
  (typeof contact === 'undefined')
  ?(
  <div className="mainWindow" style={{'justifyContent':'center'}}>
    <div className="contactDetails stub"> no contact selected </div>
  </div>)
  :( <div className="mainWindow">
      <button className="editButton"
              onClick={()=>{
                edit(inEditState)
                //if (inEditeState) {
                // save("bob", "marley", "420","bm@coolkid.com","jamaica")
                // }
              }}
              > {(inEditState)? "save" : "edit"} </button>
      <div className="contactName" 
           id="name"> 
             {contact.firstname} {contact.lastname} </div>
      <div className="contactDetails"
           id="phone"> 
             Phone: {contact.phone}</div>
      <div className="contactDetails" 
           id="email"> 
             Email: {contact.email} </div>
      <div className="contactDetails"
           id="address"> 
             Address: {contact.address}</div>
    </div>
   )
)}

export default MainWindow;

import React from 'react'; 
import './MainWindow.css'

const MainWindow = ({contact, inEditState,  edit, save}) => {
  return(
  (typeof contact === 'undefined')
  ?
    <div className="mainWindow" style={{'justifyContent':'center'}}>
      <div className="stub"> no contact selected </div>
    </div>
  :<div className="mainWindow">
    { inEditState
      ? <div>
          <div className="editButtonContainer"> <button className="editButton"
              onClick={()=> {
                edit(inEditState)
                const updatedContact = {
                  firstname: document.getElementById("name").value.split(" ",2)[0],
                  lastname: document.getElementById("name").value.split(" ",2)[1],
                  phone: document.getElementById("phone").value,
                  email: document.getElementById("email").value,
                  address: document.getElementById("address").value
                }
                save(contact.contactId, updatedContact)
              }}> save </button></div>
          <div>
            <input className="contactName activeFillin" 
                   id="name" 
                   defaultValue={contact.firstname + " " + contact.lastname}/>
          </div>
          <div className="field">
            <span className="contactField"> Phone: </span>
            <div className="contactDetails">
              <input className="contactField contactDetails activeFillin"
              id="phone"
              type="text" 
              contentEditable="true"
              autoComplete="off"
              defaultValue={contact.phone}/>
            </div>
          </div>
          <div className="field">
            <span className="contactField"> Email: </span> 
            <div className="contactDetails">
              <input className="contactField contactDetails activeFillin" 
                 id="email" 
                 type="text" 
                 contentEditable={inEditState}
                 autoComplete="off"
                 defaultValue={contact.email}/> 
            </div>
          </div>
          <div className="field">
            <span className="contactField"> Address: </span>
            <div className="contactDetails">
              <input className="contactField contactDetails activeFillin" 
               id="address"
               type="text" 
               contentEditable={inEditState}
               defaultValue={contact.address}/>
            </div>
          </div>
        </div>
      : <div>
          <div className="editButtonContainer"> <button className="editButton" 
                        onClick={()=>
                          edit(inEditState)
                        }> edit </button></div>
          <div className="contactName" id="name"> 
            {contact.firstname} {contact.lastname} </div>
          <div className="field">
            <span className="contactField"> Phone: </span>
            <div className="contactField contactDetails"> {contact.phone} </div>
          </div>
          <div className="field">
            <span className="contactField"> Email: </span> 
            <div className="contactField contactDetails"> {contact.email}</div> 
          </div>
          <div className="field">
            <span className="contactField"> Address: </span>
            <div className="contactField contactDetails"> {contact.address}</div>
          </div>
        </div>
      }
    </div>
)}

export default MainWindow;

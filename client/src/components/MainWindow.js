import React from 'react'; 
import './MainWindow.css'

const MainWindow = ({contact, inEditState, edit, save}) => {
  console.log(inEditState)
  return(
  (typeof contact === 'undefined')
  ?(
    <div className="mainWindow" style={{'justifyContent':'center'}}>
      <div className="stub"> no contact selected </div>
    </div>)
  :( 
    <div className="mainWindow">
    { inEditState
      ? <div>
          <div className="editButtonContainer"> <button className="editButton"
                  onClick={()=> {
                    edit(inEditState)
                    const contact = {
                      firstname: document.getElementById("firstname").value,
                      // lastname: document.getElementById("lastname").value,
                      phone: document.getElementById("phone").value,
                      email: document.getElementById("email").value,
                      address: document.getElementById("address").value
                    }
                    console.log(contact)
                    //save(contact)
                  }}> save </button></div>
          <div>
            <input className="contactName" 
                 id="firstname" 
                 defaultValue={contact.firstname}/>
          </div>
          <div className="field">
            <span className="contactField"> Phone: </span>
            <div className="contactField contactDetails">
              <input className="contactDetails"
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
              <input className="contactField contactDetails" 
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
              <input className="contactField contactDetails" 
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
   )
)}

export default MainWindow;

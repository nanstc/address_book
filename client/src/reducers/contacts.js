const contacts = (state = [], action) => {
    switch (action.type) {
    case 'RECEIVE_CONTACTS':
      return Object.assign([], state, action.contacts)
    case 'UPDATE_CONTACT': 
      return state.map(oldContact => 
             (oldContact.contactId === action.contact.contactId)
             ? action.contact 
             : oldContact) 
    case 'SAVE_CONTACT':
      return state // swap it to action.updatedContact
    default: 
      return state 
  }
}

export default contacts;

const contacts = (state = [], action) => {
    switch (action.type) {
    case 'RECEIVE_CONTACTS':
      return Object.assign([], state, action.contacts)
    case 'SAVE_CONTACT':
      return state // swap it to action.updatedContact
    default: 
      return state 
  }
}

export default contacts;

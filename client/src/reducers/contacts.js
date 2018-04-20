const contacts = (state = [], action) => {
    switch (action.type) {
    // case 'EDTI_CONTACT': TODO 
    // case 'SAVE_CONTACT': TODO
    case 'RECEIVE_CONTACTS':
      return Object.assign([], state, action.contacts)
    default: 
      return state 
  }
}

export default contacts;

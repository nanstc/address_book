//TODO: change the inital state to be result of an API call
const contacts = (state = [
  {id: 1, name: 'bob', toggled: false}, 
  {id: 2, name: 'alice', toggled: false}]
  , action) => {
    switch (action.type) {
    case 'TOGGLE_CONTACT': 
      return Object.assign({}, state, {
        contacts: state.contacts.map(contact =>
          (contact.id === action.id)
            ? {...contact, toggled: true} 
            : {...contact, toggled: false}
        )
      })
    // case 'EDTI_CONTACT': TODO 
    // case 'SAVE_CONTACT': TODO
    default: 
      return state 
  }
}

export default contacts;

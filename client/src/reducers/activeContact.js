const activeContact = (state = "-1", action) => {
  switch (action.type) {
    case 'SHOW_CONTACT':
      return action.contactId
    case 'HIGHLIGHT_CONTACT': 
      return action.contactId
    default: 
        return state
  }

}

export default activeContact

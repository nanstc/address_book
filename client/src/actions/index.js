import fetch from 'cross-fetch';

/*
 * API-related actions
 */

export const requestContacts = () => ({
  type: 'REQUEST_CONTACTS'
})

export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(requestContacts) 
    return fetch('//localhost:3001/graphql?query=query+{contacts{contactId firstname lastname phone address email}}')
    .then(response => response.json())
    .then(json => {dispatch(receiveContacts(json))})
  }
}

export const receiveContacts = (json) => ({
  type: 'RECEIVE_CONTACTS',
  contacts: json.data.contacts
})

/*
 * Left-panel actions
 */

export const searchContacts = (searchString) => ({
  type: 'SEARCH_CONTACTS', 
  searchString,
})

export const toggleContact = (contact) => {
  return (dispatch) => {
    dispatch(highlightContact(contact.contactId))
    dispatch(showContact(contact.contactId))
  }
}

export const highlightContact = (contactId) => ({
  type : 'HIGHLIGHT_CONTACT',
  contactId, 
})

/*
 * Main Window Actions
 */

export const showContact = (contactId, inEditState) => {
  return (dispatch) => {
    dispatch(viewContact(contactId))
    dispatch(lockContact())
  }
}

export const viewContact = (contactId) => ({
  type: 'VIEW_CONTACT',
  contactId,
})

export const editContact = (inEditState) => ({
  type: 'EDIT_CONTACT',
  inEditState,
})

export const saveContact = () => ({
  type: 'SAVE_CONTACT',
})

export const lockContact = () => ({
  type: 'LOCK_CONTACT',
  editState: false //make sure contact is read only when viewed
})

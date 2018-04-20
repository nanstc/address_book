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

export const showContact = (contactId) => ({
  type: 'SHOW_CONTACT',
  contactId,
})

export const editContact = (contactId) => ({
  type: 'EDIT_CONTACT',
  contactId,
})

export const saveContact = () => ({
  type: 'SAVE_CONTACT',
})

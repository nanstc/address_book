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
    let query = `query{contacts{contactId firstname lastname phone address email}}`
    return fetch('//localhost:3001/graphql?query=' + query)
    .then(response => response.json())
    .then(json => {dispatch(receiveContacts(json))})
  }
}

export const saveContact = (contactId, contact) => {
  return (dispatch) => {
    const query =`mutation EditContact($id: ID!, $contact: ContactInput){editContact(id:$id,contact:$contact){contactId firstname lastname phone address email}}`
    const variables = {id:contactId, contact: contact}
    return fetch('//localhost:3001/graphql', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({query, variables}) 
    })
    .then(response => response.json())
    .then(json => {dispatch(updateContact(json))}) 
  }
}

export const receiveContacts = (json) => ({
  type: 'RECEIVE_CONTACTS',
  contacts: json.data.contacts
})

export const updateContact = (json) => ({
  type: 'UPDATE_CONTACT', 
  contact: json.data.editContact  
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


export const lockContact = () => ({
  type: 'LOCK_CONTACT',
  editState: false //make sure contact is read only when viewed
})

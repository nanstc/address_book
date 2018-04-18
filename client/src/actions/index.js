export const searchContacts = (searchString) => ({
  type: 'SEARCH_CONTACTS', 
  searchString,
})

export const toggleContacts = (contactId) => ({
  type: 'TOGGLE_CONTACT', 
  contactId,
})

export const editContact = (contactId) => ({
  type: 'EDIT_CONTACT',
  contactId,
})

export const saveContact = () => ({
  type: 'SAVE_CONTACT',
})

// reducers takes in a state and an action, and return the updated state 
// must be pure functions
import { combineReducers } from 'redux'; 
import contacts from './contacts';
import searchBar from './searchBar';
import activeContact from './activeContact';

const addressBookApp = combineReducers({
  searchString: searchBar,
  contacts: contacts,  
  activeContact: activeContact
})

export default addressBookApp; 

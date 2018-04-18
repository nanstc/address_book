// reducers takes in a state and an action, and return the updated state 
// must be pure functions
import { combineReducers } from 'redux'; 
import contacts from './contacts'
import searchBar from './searchBar'

const addressBookApp = combineReducers({
  searchString: searchBar,
  contacts: contacts  
})

export default addressBookApp; 

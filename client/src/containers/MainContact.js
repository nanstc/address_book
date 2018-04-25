// container component that feeds right contact into the main window 
import { connect } from 'react-redux'; 
import { editContact, saveContact } from '../actions';
import MainWindow from '../components/MainWindow';
import queryStringParser from '../utils/queryStringParser'; 


const findContact = (activeContactId, contacts, queryString) => {
  if (typeof queryString === 'undefined') {
    return contacts.find(contact => contact.contactId === activeContactId) 
  }
  else {
    const firstname = queryStringParser(queryString).firstname
    const lastname = queryStringParser(queryString).lastname
    return contacts.find(contact => 
        contact.firstname === firstname && contact.lastname === lastname)
  }
}

const mapStateToProps = (state, ownProps)  => ({ 
  contact: findContact(state.activeContact, state.contacts, ownProps.queryString),
  inEditState: state.editMode
})

const mapDispatchToProps = dispatch => ({
  // this is about cliking the edit button
  edit: inEditState => dispatch(editContact(inEditState)), 
  save: (contactId, contact) => dispatch(saveContact(contactId, contact))  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(MainWindow);


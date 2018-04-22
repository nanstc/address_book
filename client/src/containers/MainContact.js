// container component that feeds right contact into the main window 
import { connect } from 'react-redux'; 
import { editContact, saveContact } from '../actions';
import MainWindow from '../components/MainWindow';

const findContact = (activeContactId, contacts) => {
  return contacts.find(contact => contact.contactId === activeContactId) 
}

const mapStateToProps = state  => ({ 
  contact: findContact(state.activeContact, state.contacts),
  inEditState: state.editMode
})

const mapDispatchToProps = dispatch => ({
  // this is about cliking the edit button
  edit: inEditState => dispatch(editContact(inEditState)), 
  save: (firstname, lastname, phone, email, address) => {
    const updatedContact = {firstname, lastname, phone, email, address}
    dispatch(saveContact(updatedContact))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(MainWindow);


// container component that feeds right contact into the main window 
import { connect } from 'react-redux'; 
import MainWindow from '../components/MainWindow';

const findContact = (activeContactId, contacts) => {
  return contacts.find(contact => contact.contactId === activeContactId) 
}

const mapStateToProps = state  => {
  return { 
    contact: findContact(state.activeContact, state.contacts)
  }
}

const mapDispatchToProps = dispatch => ({
  // this is about cliking the edit button
})

export default connect(
  mapStateToProps, 
)(MainWindow);


import { connect } from 'react-redux'; 
import { toggleContact } from '../actions';
import ContactList from '../components/ContactList';

const getVisibleContacts = (contacts, searchString) => {
  return contacts.filter(contact => 
    (contact.firstname.toLowerCase().includes(searchString) 
    || contact.lastname.toLowerCase().includes(searchString))
  ) 
}

const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state.contacts, state.searchString),
    activeContact: state.activeContact
}}

const mapDispatchToProps = dispatch => {
  return {
    toggleContact: contact => dispatch(toggleContact(contact))
}}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ContactList);

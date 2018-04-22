import { connect } from 'react-redux'; 
import { searchContacts } from '../actions';
import SearchBar from '../components/SearchBar';

const mapStateToProps = () => {
  return {
    searchString: ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: searchString => dispatch(searchContacts(searchString))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar)

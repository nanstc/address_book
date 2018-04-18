//TODO: fix the state of search bar
const searchBar = (state = '', action) => {
  switch(action.type) {
    case 'SEARCH_CONTACT':
      return action.searchString
    default:
        return state
  }
}

export default searchBar

const searchBar = (state = '', action) => {
  switch(action.type) {
    case 'SEARCH_CONTACTS':
      return action.searchString
    default:
        return state
  }
}

export default searchBar

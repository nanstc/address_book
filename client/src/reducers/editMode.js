const editMode = (state = false, action) => {
  switch(action.type) {
    case 'LOCK_CONTACT': 
      return action.editState
    case 'EDIT_CONTACT':
      return !action.inEditState 
    default: 
      return state; 
  }
}


export default editMode;

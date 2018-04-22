import React from 'react';
import VisibleContacts from '../containers/VisibleContacts'
import SearchContacts from '../containers/SearchContacts'
import './LeftPanel.css'
const LeftPanel = () => (
  <div className = "leftPanel">
    <span className="title"> All Contacts </span>
    <SearchContacts/>
    <VisibleContacts />
  </div>
)

export default LeftPanel; 

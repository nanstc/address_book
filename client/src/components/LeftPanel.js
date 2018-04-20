import React from 'react';
import VisibleContacts from '../containers/VisibleContacts'
import './LeftPanel.css'
const LeftPanel = () => (
  <div className = "leftPanel">
    <span className="title"> All Contacts </span>
    <div className ="searchBar">
      this is the stub searchBar
    </div>
    <VisibleContacts />
  </div>
)

export default LeftPanel; 

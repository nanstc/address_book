import React from 'react';
import LeftPanel from './LeftPanel';
import MainWindow from './MainWindow';
import './App.css';

const App = () => (
  <div className="app">
    <LeftPanel className="leftpanel" />  
    <MainWindow className="mainwindow" />
  </div>
)

export default App;

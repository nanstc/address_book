import React from 'react';
import LeftPanel from './LeftPanel';
import MainContact from '../containers/MainContact';
import './App.css';

const App = ( {match : {params}} ) => (
  <div className="app">
    <LeftPanel />  
    <MainContact queryString={params.querystring} />
  </div>
)

export default App;

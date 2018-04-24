import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import addressBookApp from './reducers'
import registerServiceWorker from './utils/registerServiceWorker';

import { fetchContacts } from './actions'


const store = createStore(
  addressBookApp, 
  applyMiddleware(thunkMiddleware)
)

store.dispatch(fetchContacts()).then(()=> console.log(store.getState()))
 
registerServiceWorker();

render(
  <Provider store={store}>
    <Router>
      <Route path="/contacts" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)


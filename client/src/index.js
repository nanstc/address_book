import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'
import App from './components/App';
import addressBookApp from './reducers'
import registerServiceWorker from './utils/registerServiceWorker';

import { fetchContacts } from './actions'

//TODO: refactor root and index out so we don't have statelss + statefull together

const store = createStore(
    addressBookApp, 
    applyMiddleware(thunkMiddleware)
) 
store.dispatch(fetchContacts()).then(()=> console.log(store.getState()))
registerServiceWorker();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


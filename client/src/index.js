import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from './components/App';
import addressBookApp from './reducers'
import registerServiceWorker from './utils/registerServiceWorker';
import { fetchContacts } from './actions'


const store = createStore(
  addressBookApp, 
  applyMiddleware(thunkMiddleware)
)

store.dispatch(fetchContacts())
 
registerServiceWorker();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/contacts/:querystring?" component={App} />
        <Route exact path="/" render={()=> <Redirect to="/contacts/"/>} />
        <Route path="/:invalidUrl" render={()=><div> Invalid URL </div>} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)


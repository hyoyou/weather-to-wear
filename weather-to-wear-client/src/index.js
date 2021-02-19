import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();

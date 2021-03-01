import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

const store = createStore(reducer,applyMiddleware(thunk));

console.log(store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , rootElement);


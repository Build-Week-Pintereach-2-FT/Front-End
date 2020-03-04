import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers/index';
import history from './utils/history'


const store = createStore(reducer, applyMiddleware(thunk));

//use Router instead of BrowserRouter as Router here to set history
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}> 
            <App />
        </Router>, 
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import store from './components/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

serviceWorker.unregister();


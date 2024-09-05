import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store';
import App from './App.js';
import { Provider } from 'react-redux';

ReactDOM.render(

 <Provider store={configureStore()} >
    <App/>
    </Provider>,
    document.getElementById('root'),


);

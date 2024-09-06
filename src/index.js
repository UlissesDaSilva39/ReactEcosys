import React from 'react';
import  ReactDom from 'react-dom';
import {persitStore} from 'redux-persit'
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './store';

const store = configureStore();
const persitor = persitStore(store);


ReactDom.render(<App /> , document.getElementById('root'));

ReactDOM.render(
    <Provider store={configureStore()}>
        <PersistGate
        persistor={persitor}/>
            <App/>
       </Provider>,
       document.getElementById('root'),
   )
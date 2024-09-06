import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store';
import App from './App.js';
import { Provider } from 'react-redux';
import {persitReducer} from 'redux-persit'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { combineReducers } from 'redux';

const persistConfig = {
    key: 'root',
    storage,
  };
  
  const rootReducer = combineReducers({
    todos,
  });
  
  // Correctly assign persistReducer to a variable
  const persistedReducer = persistReducer(persistConfig, rootReducer);
 
  export const configureStore = () => createStore(persistedReducer);
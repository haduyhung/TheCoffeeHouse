import React, { Component } from "react";

import { createStore } from "redux";

import { Provider } from "react-redux";

import allReducers from "./src/reducers";

import AppNavigation from "./src/appNavigation/router";

import { persistStore, persistReducer } from 'redux-persist'

import { PersistGate } from 'redux-persist/integration/react'

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, allReducers)

let store = createStore(persistedReducer);
let persistor = persistStore(store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  }
}

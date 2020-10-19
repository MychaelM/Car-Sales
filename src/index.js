import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { carReducer } from "./reducers";
import { createStore } from "redux";

import 'bulma/css/bulma.css';
import './styles.scss';
import { Provider } from 'react-redux';

const store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

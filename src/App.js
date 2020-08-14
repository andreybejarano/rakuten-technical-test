import '@babel/polyfill';
import 'url-search-params-polyfill';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';

import history from './history';
import configureStore from '@/store/configStore';
import Pages from '@/Pages';

import '@/styles/Main.css';

const store = configureStore({}, history);
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Suspense fallback={<div></div>}>
        <Pages />
      </Suspense>
    </Router>
  </Provider>,
  app
);

// Easy-to-use library for eliminating the 300ms delay between a
// physical tap and the firing of a click event on mobile browsers
FastClick.attach(document.body);

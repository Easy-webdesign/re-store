import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { App } from './app';

import { Provider } from 'react-redux';
import store from './store';
import { BSProvider, ErrorBoundry } from './components';
import BookStoreService from './services/book-store-service';

import {BrowserRouter as Router} from 'react-router-dom';

const bss = new BookStoreService();

ReactDOM.render( 
    <ErrorBoundry>
        <BSProvider value={bss}>
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        </BSProvider>
    </ErrorBoundry>, 

document.getElementById('root'));


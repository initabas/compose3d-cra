import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';

import './index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

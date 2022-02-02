import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { Authreducer}  from './reducer/index';
const store=createStore(Authreducer,compose(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root')
);
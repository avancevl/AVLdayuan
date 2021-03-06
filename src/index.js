import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import rootReducer from './reducers';
// import ALL from './examples/app';

import * as serviceWorker from './serviceWorker';
const store = createStore(rootReducer)
// const store = createStore(reducer);

// const initialState = {
//         count: 42
// };

// function reducer(state = initialState, action) {
//         return state;
// }
console.log("getState", store.getState())
ReactDOM.render(
        // <ALL />,

        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

console.log('%c Welcome ', 'background: #ff015b; color: #ffffff; padding: 1px; border-radius: 4px;');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

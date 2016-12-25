import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import { articles } from './fixtures';

ReactDOM.render(
    <div>
        <h1>Articles list</h1>
        <AppContainer articles = { articles } />
    </div>,
    document.getElementById('container')
);


import React from 'react';
import ReactDOM from 'react-dom';
import Articleslist from './components/ArticlesList';
import { articles } from './fixtures';

ReactDOM.render(
    <div>
        <h1>Articles list</h1>
        <Articleslist articles = { articles } />
    </div>,
    document.getElementById('container')
);


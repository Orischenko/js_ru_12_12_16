import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesLit from './components/ArticleList';
import { articles } from './fixtures';

ReactDOM.render(
    <div>
        <h1>Articles list</h1>
        <ArticlesLit articles = { articles } />
    </div>,
    document.getElementById('container')
);


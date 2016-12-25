import React, { Component, PropTypes } from 'react';
import Article from './Article';
import {findDOMNode} from 'react-dom';
import accordionDecorator from '../decorators/accordion';

class Articleslist extends Component{
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
        //openItemId: PropTypes.bool.isRequired (?)
    };

    render() {
        const { articles, toggleOpenItem, openItemId } = this.props;

        const articleElements = articles.map(
            (article) => {
                return <li key = { article.id }>
                    <Article article = { article }
                             onClick = { toggleOpenItem(article.id) }
                             isOpen = { openItemId == article.id }
                             //ref = { this.getArticleRef }
                    />
                </li>;
            }
        );

        return (
            <ul>
                { articleElements }
            </ul>
        );
    }

    getArticleRef = (article) => {
        console.log( '---', findDOMNode(article).innerHTML );
    };
}

export default accordionDecorator(Articleslist);
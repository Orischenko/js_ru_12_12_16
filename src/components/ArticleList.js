import React, { Component } from 'react';
import Article from './Article';
import CommentsList from './CommentsList';

export default class Articlelist extends Component{
    render() {
        const { articles } = this.props;

        const articleElements = articles.map(
            (article) => {
                if(!article.comments) return <li key = { article.id } ><Article article = { article }/></li>;

                return <li key = { article.id } ><Article article = { article }/><CommentsList comments = { article.comments }/></li>;
            }
        );

        return (
            <ul>
                { articleElements }
            </ul>
        )
    }
}
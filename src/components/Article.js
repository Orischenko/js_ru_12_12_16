import React, { Component, PropTypes } from 'react';
import CommentsList from './CommentsList';

export default class Article extends Component{
    static propTypes = {
        article: PropTypes.object.isRequired
    };

    render() {
        const { article, onClick } = this.props;

        return (
            <div ref="container">
                <h3 onClick = {onClick}>{ article.title }</h3>

                { this.getBody() }
            </div>
        );
    }

    getBody() {
        if(!this.props.isOpen) return null;

        return(
            <div>
                <p>{ this.props.article.text }</p>

                <CommentsList comments = { this.props.article.comments }/>
            </div>
        );
    }
}

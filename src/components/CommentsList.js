import React, { Component, PropTypes } from 'react';
import Comment from './Comment';
import toggleOpen from './../decorators/toggleOpen';
import UserForm from './UserForm';

class CommentsList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired
    };

    static defaultProps = {
        comments: []
    };

    render() {
        return (
            <ul>
                { this.getLink() }

                { this.getComments() }
            </ul>
        )
    }

    getLink() {
        return (
            <button href="#" onClick = { this.props.toggleOpen }>
                { this.props.isOpen ? 'hide' : 'show' } comments
            </button>
        );
    }

    getComments() {
        const { comments, isOpen } = this.props;

        if(!isOpen) return null;

        if (!comments.length) return <p>No comments yet</p>;

        const commentElements = comments.map(
            (comment) => <li key = { comment.id } ><Comment comment = { comment }/></li>
        );

        return (
            <div>
                { commentElements }
                <UserForm />
            </div>
        );
    }
}

export default toggleOpen(CommentsList);
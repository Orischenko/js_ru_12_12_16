import React, { Component } from 'react';
import Comment from './Comment';

export default class TestimonialsList extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <ul>
                <button onClick = {this.toggleOpen}>Open Comment</button>

                {this.getComments()}
            </ul>
        )
    }

    toggleOpen = (event) => {
        this.setState({
            isOpen: !this.state.isOpen
        });

        (this.state.isOpen) ? event.target.innerHTML = 'Open Comment' : event.target.innerHTML = 'Close Comment';
    };

    getComments() {
        const { comments } = this.props;

        const commentElements = comments.map(
            (comment) => <li key = { comment.id } ><Comment comment = { comment }/></li>
        );

        if(!this.state.isOpen) return null;

        return (
            <div>{ commentElements }</div>
        )

    }
}
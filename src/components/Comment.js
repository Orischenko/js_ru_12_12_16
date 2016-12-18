import React, { Component } from 'react';

export default class Testimonials extends Component{
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    render(){
        const { comment } = this.props;

        return (
            <blockquote>
                <h5>{ comment.user }</h5>
                <p><i>{ comment.text }</i></p>
            </blockquote>
        )
    }
}
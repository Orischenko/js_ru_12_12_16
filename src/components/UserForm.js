import React, { Component, PropTypes } from 'react';

export default class UserForm extends Component{
    static propsTypes = {

    };

    state = {
        username: ''
    };

    render() {

        return (
            <div>
                <p>Input text:</p>
                <input type="text" value = { this.state.username } onInput = { this.handleChange }/>
            </div>
        );
    }

    handleChange = (event) => {
        if(this.state.username.length > 10) return;

        this.setState({
            username: event.target.value
        });

        console.log( '---', 'input value:', event.target.value );
    }
}
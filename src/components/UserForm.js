import React, { Component, PropTypes } from 'react';

export default class UserForm extends Component{
    static propsTypes = {

    };

    state = {
        username: '',
        usermessage: ''
    };

    render() {

        return (
            <div>
                <input type="text" value = { this.state.username } onInput = { this.handleChangeName } placeholder="Enter Name" />
                <textarea type="text" value = { this.state.usermessage } onInput = { this.handleChangeMessage } placeholder="Enter Message" />
                <button onClick={this.getInputValue}>Submit</button>
            </div>
        );
    }

    handleChangeName = (event) => {
        if (event.target.value.length > 10) return;

        this.setState({
            username: event.target.value
        });
    };

    handleChangeMessage = (event) => {
        this.setState({
            usermessage: event.target.value
        });
    };

    getInputValue = () => {
        console.log( this.state.username + ' ' + this.state.usermessage );
    };
}
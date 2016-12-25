import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css'

export default class Filter extends Component{
    static propTypes = {

    };

    state = {
        selected: null
    };

    render() {
        const options = this.props.articles.map((article) => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div className="custom-select">
                <Select options = { options } value = { this.state.selected } onChange = { this.handleChange } multi={ true }/>
            </div>
        );
    }

    handleChange = (selected) => {
        this.setState({
            selected
        });
    }
}
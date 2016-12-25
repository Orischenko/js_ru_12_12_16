import React, { Component, PropTypes } from 'react';
import ArticleList from './ArticlesList';
import Filter from './Filter';
import DayPicker from './DayPicker';

export default class AppContainer extends Component{
    render() {
        const { articles } = this.props;

        return (
            <div>
                <Filter articles = { articles } />
                <DayPicker />
                <ArticleList articles = { articles } />
            </div>
        )
    }
}
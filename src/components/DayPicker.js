import React, { Component, PropTypes } from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';

export default class SimpleCalendar extends Component{
    constructor(props) {
        super(props);
        this.isDaySelected = this.isDaySelected.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    static propTypes = {

    };

    state = {
        selectedDays: [],
    };

    render() {
        return (
            <div className="custom-calendar">
                <DayPicker
                    selectedDays={ this.isDaySelected }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        );
    }

    isDaySelected(day) {
        return this.state.selectedDays.some(selectedDay =>
            DateUtils.isSameDay(selectedDay, day)
        );
    }

    handleDayClick(e, day, { selected }) {
        const { selectedDays } = this.state;

        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day),
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }

        this.setState({ selectedDays });

        selectedDays.forEach((day) => {
            alert( day.toLocaleDateString() );
        });
    }
}
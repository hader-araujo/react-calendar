import React from "react";
import { connect } from "react-redux"

import Calendar from "./by-month/Calendar";
import FullDate from "./FullDate";

import { fetchDate, changeDate } from "../actions/CalendarActions"

import { fetchHolidays } from "../actions/HolidaysActions"

@connect((store) => {
    return {
        selectedDate : store.calendar.selectedDate
    };
})
export default class ByMonth extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchDate())
        fetchHolidays(this.props.dispatch.bind(this))
    }

    changeDate(newDate) {
        this.props.dispatch(changeDate(newDate))
    }

    render(){
        const { selectedDate } = this.props;
        
        console.log(this.props)
        
        return (

            <div id="calendar">
                <div id="show-calendar">
                    <Calendar changeDate={this.changeDate.bind(this)} selectedDate={selectedDate} />
                    <FullDate selectedDate={selectedDate} />
                </div>
            </div>
        );
    }
}
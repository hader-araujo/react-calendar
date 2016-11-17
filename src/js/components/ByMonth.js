import React from "react";
import { connect } from "react-redux"

import Calendar from "./by-month/Calendar";
import FullDate from "./FullDate";

import {  getFullYear } from '../Utils/DateUtil';
import { fetchDate, changeDate } from "../actions/CalendarActions"
import { fetchHolidays } from "../actions/HolidaysActions"

@connect((store) => {
	const selectedDate = store.calendar.selectedDate
	const year = getFullYear(selectedDate)
	
	const holidays = store.holidays[year]
	
	if (holidays){
		localStorage.setItem(year, JSON.stringify(holidays))
	}
	
	return {
        selectedDate,
		holidays : JSON.parse(localStorage.getItem(year))
    };
})
export default class ByMonth extends React.Component {
    constructor(props) {
        super(props);
    }

  componentWillMount() {
        this.props.dispatch(fetchDate())
		
		const selectedDate = this.props.selectedDate || Date.now
		const year = getFullYear(selectedDate)
		
        if (! localStorage.getItem(year))
		{
            fetchHolidays(year, this.props.dispatch.bind(this))
		}        
    }

    changeDate(newDate, holiday) {
        this.props.dispatch(changeDate(newDate, holiday))
    }

    render(){
        const { selectedDate, holidays } = this.props
		const year = getFullYear(selectedDate)
		
        return (
            <div id="calendar">
                <div id="show-calendar">
                    <Calendar changeDate={this.changeDate.bind(this)} selectedDate={selectedDate} holidays={holidays} />
                    <FullDate selectedDate={selectedDate} />
                </div>
            </div>
        );
    }
}
Calendar.defaultProps = {
    holidays: {}
}
import React from "react";
import { connect } from "react-redux"

import Calendar from "./by-month/Calendar";
import Filter from "./Filter";

import {  getFullYear } from '../Utils/DateUtil';
import { fetchDate, changeDate } from "../actions/CalendarActions"
import { fetchHolidays } from "../actions/HolidaysActions"
import { setType, setCountry } from "../actions/FilterActions"

@connect((store) => {
	const selectedDate = store.calendar.selectedDate
	const { filterType, filterCountry } = store.filter
	const holidayKey = `${filterCountry}-${getFullYear(selectedDate)}`
	
	const holidays = store.holidays[holidayKey]

	if (holidays){
		localStorage.setItem(holidayKey, JSON.stringify(holidays))
	}
	
	return {
        selectedDate,
		holidays : JSON.parse(localStorage.getItem(holidayKey)),
		filterType : filterType,
		filterCountry : filterCountry,
    };
})
export default class ByMonth extends React.Component {
    constructor(props) {
        super(props);
    }
	
	componentWillMount() {
		let { selectedDate } = this.props
		selectedDate = selectedDate || Date.now
		
		this.props.dispatch(fetchDate())
	}
	
	componentWillReceiveProps(nextProps) {
		let { selectedDate, filterCountry } = nextProps
		
		const year = getFullYear(selectedDate)
		const holidayKey = `${filterCountry}-${year}`
		
        if (! localStorage.getItem(holidayKey))
		{
            fetchHolidays(year, filterCountry, this.props.dispatch.bind(this))
		} 
	}

    changeDate(newDate, holiday) {
        this.props.dispatch(changeDate(newDate, holiday))
    }
	
	setFilterType(value){
		this.props.dispatch(setType(value))
	}
	
	setFilterCountry(value){
		this.props.dispatch(setCountry(value))
	}

    render(){
        const { selectedDate, filterType, filterCountry } = this.props
		let holidays = this.props.holidays || {}
		const year = getFullYear(selectedDate)
		
        return (
            <div id="calendar">
                <div id="show-calendar">
                    <Filter setFilterType={this.setFilterType.bind(this)} setFilterCountry={this.setFilterCountry.bind(this)} filterType={filterType} filterCountry={filterCountry} />
					<Calendar changeDate={this.changeDate.bind(this)} selectedDate={selectedDate} holidays={holidays} filterType={filterType} />
                </div>
            </div>
        );
    }
}
Calendar.defaultProps = {
    holidays: {}
}
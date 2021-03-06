import React from "react";
import { connect } from "react-redux"
import * as toastr from "toastr"

import ByMonth from "./ByMonth";
import ByYear from "./ByYear";
import Filter from "./Filter";

import {  getFullYear } from '../Utils/DateUtil';
import { fetchDate, changeDate } from "../actions/CalendarActions"
import { fetchHolidays } from "../actions/HolidaysActions"
import { setType, setCountry } from "../actions/FilterActions"
import { setType as setCalendarType } from "../actions/CalendarTypeActions"

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
		holidaysError: store.holidays.error,
		filterType : filterType,
		filterCountry : filterCountry,
		calendarType : store.calendarType.calendarType
    };
})
export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
	
	componentWillMount() {
		let { selectedDate } = this.props
		selectedDate = selectedDate || Date.now
		
		this.props.dispatch(fetchDate())
	}
	
	componentWillReceiveProps(nextProps) {
		let { selectedDate, filterCountry, holidaysError } = nextProps
		
		const year = getFullYear(selectedDate)
		const holidayKey = `${filterCountry}-${year}`
		
        
		if (holidaysError){
			toastr.error(holidaysError, 'Error fetching the holidays ', {timeOut: 10000})
		}else{
			if (! localStorage.getItem(holidayKey))
			{
	            fetchHolidays(year, filterCountry, this.props.dispatch.bind(this))
			}
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
	
	setCalendarType(value){
		this.props.dispatch(setCalendarType(value))
	}
	
	getSelectedDate(){
        return new Date(this.props.selectedDate)
    }

    setSelectedDate(newDate, holiday){
        this.changeDate(newDate, holiday)
    }
    
    render(){
        const { selectedDate, filterType, filterCountry, calendarType } = this.props
		let holidays = this.props.holidays || {}
		
        return (
            <div id="calendar">
                <div id="show-calendar">
                    <Filter setFilterType={this.setFilterType.bind(this)} setFilterCountry={this.setFilterCountry.bind(this)} filterType={filterType} filterCountry={filterCountry} calendarType={calendarType} />
					<ByMonth getSelectedDate={this.getSelectedDate.bind(this)} setSelectedDate={this.setSelectedDate.bind(this)} selectedDate={selectedDate} holidays={holidays} filterType={filterType} calendarType={calendarType} setCalendarType={this.setCalendarType.bind(this)} />
					<ByYear  getSelectedDate={this.getSelectedDate.bind(this)} setSelectedDate={this.setSelectedDate.bind(this)} calendarType={calendarType} setCalendarType={this.setCalendarType.bind(this)} />
                </div>
            </div>
        );
    }
}
import React from "react";
import {renderIf} from 'react-render-if'

import Head from "./by-month/Head"
import WeekDays from "./by-month/WeekDays"
import Days from "./by-month/Days"
import HolidayList from "./by-month/HolidayList"

import { CALENDAR_TYPE, HOLIDAY_TYPE } from "../Utils/Consts"
const { PUBLIC } = HOLIDAY_TYPE
const { MONTHLY } = CALENDAR_TYPE

import {  getFullMonth, getFullYear, getDefaultDate, getFullDay } from '../Utils/DateUtil';

@renderIf(  
  x => x.props.calendarType == MONTHLY
)
export default class ByMonth extends  React.Component {

    month(){
        return getFullMonth(this.props.getSelectedDate())
    }

    year(){
        return getFullYear(this.props.getSelectedDate())
    }

	getHolidays(d) {
		const date = this.props.getSelectedDate()
		date.setDate(d)
		
		const dateFomated = getDefaultDate(date)
		
		const holidaysOfDay = this.props.holidays[dateFomated]
		
		let holidays = "";
		if (holidaysOfDay){
			if (this.props.filterType == PUBLIC){
				holidays = holidaysOfDay.filter( (elem) => elem[PUBLIC]).map( (elem) => elem.name).join()	
			}else{
				holidays = holidaysOfDay.map( (elem) => elem.name).join()
			}
		}
		
		return holidays
	}
	
	getActualDay(){
		return getFullDay(this.props.getSelectedDate())
	}

    render(){
        
        const { setSelectedDate, getSelectedDate } = this.props

        return (

            <div>
                <Head month={this.month.bind(this)} year={this.year.bind(this)} setSelectedDate={setSelectedDate} getSelectedDate={getSelectedDate} setCalendarType={this.props.setCalendarType} />
                
                <WeekDays />
                
                <Days getHolidays={this.getHolidays.bind(this)} filterType={this.props.filterType} month={this.month.bind(this)} year={this.year.bind(this)} setSelectedDate={setSelectedDate} getSelectedDate={getSelectedDate}/>

				<HolidayList holidays={this.getHolidays(this.getActualDay())} getSelectedDate={getSelectedDate} />
				
            </div>
        );
    }
}
ByMonth.defaultProps = {
    selectedDate: Date.now()
}
import React from "react";
import {renderIf} from 'react-render-if'

import Head from "./Head"
import WeekDays from "./WeekDays"
import Days from "./Days"
import HolidayList from "./HolidayList"

import { CALENDAR_TYPE, HOLIDAY_TYPE } from "../../Utils/Consts"
const { PUBLIC } = HOLIDAY_TYPE
const { MONTHLY } = CALENDAR_TYPE

import {  getFullMonth, getFullYear, getDefaultDate, getFullDay } from '../../Utils/DateUtil';

@renderIf(  
  x => x.props.calendarType == MONTHLY
)
export default class ByMonth extends  React.Component {

    getSelectedDate(){
        return new Date(this.props.selectedDate)
    }

    setSelectedDate(newDate, holiday){
        this.props.changeDate(newDate, holiday)
    }

    month(){
        return getFullMonth(this.getSelectedDate())
    }

    year(){
        return getFullYear(this.getSelectedDate())
    }

	getHolidays(d) {
		const date = this.getSelectedDate()
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
		return getFullDay(this.getSelectedDate())
	}

    render(){

        return (

            <div>
                <Head month={this.month.bind(this)} year={this.year.bind(this)} setSelectedDate={this.setSelectedDate.bind(this)} getSelectedDate={this.getSelectedDate.bind(this)}/>
                
                <WeekDays />
                
                <Days getHolidays={this.getHolidays.bind(this)} filterType={this.props.filterType} month={this.month.bind(this)} year={this.year.bind(this)} setSelectedDate={this.setSelectedDate.bind(this)} getSelectedDate={this.getSelectedDate.bind(this)}/>

				<HolidayList holidays={this.getHolidays(this.getActualDay())} getSelectedDate={this.getSelectedDate.bind(this)} />
				
            </div>
        );
    }
}
ByMonth.defaultProps = {
    selectedDate: Date.now()
}
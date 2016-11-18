import React from "react";

import Head from "./Head"
import WeekDays from "./WeekDays"
import Days from "./Days"
import HolidayList from "./HolidayList"

import {  getFullMonth, getFullYear, getDefaultDate, getFullDay } from '../../Utils/DateUtil';

export default class Calendar extends  React.Component {

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
			if (this.props.filterType == 'public'){
				holidays = holidaysOfDay.filter( (elem) => elem["public"]).map( (elem) => elem.name).join()	
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

				<HolidayList holidays={this.getHolidays(this.getActualDay())} />
				
            </div>
        );
    }
}
Calendar.defaultProps = {
    selectedDate: Date.now()
}
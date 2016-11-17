import React from "react";

import { getSnapshotOfActualMonth, getFullMonth, getFullYear, getFullDay, getDefaultDate } from '../../../Utils/DateUtil';

export default class DaysOfActualMonth extends  React.Component {

	getHolidays(d) {
		const date = this.props.getSelectedDate()
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
	
    setDay(day, holiday) {
        const date = this.props.getSelectedDate()
        date.setDate(day)
        this.props.setSelectedDate(date, holiday)
    }
   
    getClassActiveDay(day, holiday){
		let css = ""
		
        const selectedDate = this.props.getSelectedDate()
        if (getFullYear(selectedDate) === this.props.year() &&
            getFullMonth(selectedDate) === this.props.month() &&
            getFullDay(selectedDate) == day
        ){
			css = "menu_link active"
        }else{
			css = "menu_link inactive"
        }
		
		if (holiday){
			css += " holiday"
		}
		
		return css
    }

    snapshotOfMonth(){
        const arrayOfLi = []
        
        getSnapshotOfActualMonth(this.props.getSelectedDate())
        .map( (d, i) =>{
			const holiday = this.getHolidays(d)
			
			return <li key={i + 'actual'} className={this.getClassActiveDay(d, holiday)} onClick={this.setDay.bind(this, d, holiday)}>{d}</li>
		})
        .forEach( (f) => arrayOfLi.push(f))
        
        return arrayOfLi
    }

    render(){

        return (

            <span>
			
                {this.snapshotOfMonth()}
            </span>

        );
    }
}
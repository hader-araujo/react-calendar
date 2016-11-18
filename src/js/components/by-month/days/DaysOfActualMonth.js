import React from "react";

import { getSnapshotOfActualMonth, getFullMonth, getFullYear, getFullDay } from '../../../Utils/DateUtil';

export default class DaysOfActualMonth extends  React.Component {

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
			const holiday = this.props.getHolidays(d)
			
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
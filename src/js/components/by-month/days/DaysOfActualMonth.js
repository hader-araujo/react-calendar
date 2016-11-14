import React from "react";

import { getSnapshotOfActualMonth, getFullMonth, getFullYear, getFullDay } from '../../../Utils/DateUtil';

export default class DaysOfActualMonth extends  React.Component {

    setDay(day) {
        const date = this.props.getSelectedDate()
        date.setDate(day)
        this.props.setSelectedDate(date)
    }
   
    getClassActiveDay(day){
        const selectedDate = this.props.getSelectedDate()
        if (getFullYear(selectedDate) === this.props.year() &&
            getFullMonth(selectedDate) === this.props.month() &&
            getFullDay(selectedDate) == day
        ){
            return "menu_link active"
        }else{
            return "menu_link inactive"
        }
    }

    snapshotOfMonth(){
        const arrayOfLi = []
        
        getSnapshotOfActualMonth(this.props.getSelectedDate())
        .map( (d, i) => <li key={i + 'actual'} className={this.getClassActiveDay(d)} onClick={this.setDay.bind(this, d)}>{d}</li>)
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
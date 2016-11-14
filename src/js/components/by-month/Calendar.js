import React from "react";

import Head from "./Head"
import WeekDays from "./WeekDays"
import Days from "./Days"

import {  getFullMonth, getFullYear } from '../../Utils/DateUtil';

export default class Calendar extends  React.Component {

    getSelectedDate(){
        return new Date(this.props.selectedDate)
    }

    setSelectedDate(newDate){
        this.props.changeDate(newDate);
    }

    month(){
        return getFullMonth(this.getSelectedDate())
    }

    year(){
        return getFullYear(this.getSelectedDate())
    }

    render(){

        return (

            <div>
            
                <Head month={this.month.bind(this)} year={this.year.bind(this)} setSelectedDate={this.setSelectedDate.bind(this)} getSelectedDate={this.getSelectedDate.bind(this)}/>
                
                <WeekDays />
                
                <Days month={this.month.bind(this)} year={this.year.bind(this)} setSelectedDate={this.setSelectedDate.bind(this)} getSelectedDate={this.getSelectedDate.bind(this)}/>

            </div>
        );
    }
}
Calendar.defaultProps = {
    selectedDate: Date.now()
}
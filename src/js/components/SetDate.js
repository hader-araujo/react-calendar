import React from "react";

import { getNameDayOfWeek, getSnapshotOfMonth, getFullMonth, getFullYear, getFullDay } from '../Utils/DateUtil';

export default class SetDate extends  React.Component {
    constructor() {
        super()
    }

    getSelectedDate(){
        return new Date(this.props.selectedDate)
    }

    setSelectedDate(newDate){
        this.props.changeDate(newDate);
    }

    setNextMonthSelectedDate() {
        const date = this.getSelectedDate()
        date.setMonth(date.getMonth() + 1)
        this.setSelectedDate(date)

        console.log("setNextMonthSelectedDate" + date)
    }

    setPrevMonthSelectedDate() {
        const date = this.getSelectedDate()
        date.setMonth(date.getMonth() - 1)
        this.setSelectedDate(date)

        console.log("setPrevMonthSelectedDate" + date)
    }

    setDay(day) {
        const date = this.getSelectedDate()
        date.setDate(day)
        this.setSelectedDate(date)

        console.log("setDay" + date)
    }

    month(){
        return getFullMonth(this.getSelectedDate())
    }

    year(){
        return getFullYear(this.getSelectedDate())
    }

    nameDayOfWeek(){
        return getNameDayOfWeek().map( (d) => <li key={d}>{d}</li>)
    }

    getClassActiveDay(day){
        const now = this.getSelectedDate()
        if (getFullYear(now) === this.year() &&
            getFullMonth(now) === this.month() &&
            getFullDay(now) == day
        ){
            return "menu_link active"
        }else{
            return "menu_link inactive"
        }
    }

    snapshotOfMonth(){
        return getSnapshotOfMonth(this.getSelectedDate()).map( (d, i) => <li key={i} className={this.getClassActiveDay(d)} onClick={this.setDay.bind(this, d)}>{d}</li>)
    }

    handleInputChange(e){
        const selectedDate = e.target.value;
        if (selectedDate) {
            this.props.changeDate(selectedDate)
            this.setState({selectedDate: ""})
        }
    }

    render(){

        return (

            <div>
                <div class="month">
                    <ul>
                        <li class="prev menu_link" onClick={this.setPrevMonthSelectedDate.bind(this)}>&#10094;</li>
                        <li class="next menu_link" onClick={this.setNextMonthSelectedDate.bind(this)}>&#10095;</li>
                        <li>
                            {this.month()} {this.year()}
                        </li>
                    </ul>
                </div>

                <ul class="weekdays">
                    {this.nameDayOfWeek()}
                </ul>

                <ul class="days">
                    {this.snapshotOfMonth()}
                </ul>


            </div>
        );
    }
}
SetDate.defaultProps = {
    selectedDate: Date.now()
}
import React from "react";
import moment from "moment";

import { getNameDayOfWeek, getSnapshotOfActualMonth, getSnapshotOfPrevMonth, getSnapshotOfNextMonth, getFullMonth, getFullYear, getFullDay } from '../Utils/DateUtil';



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
        let date = this.getSelectedDate()
        date = moment(date).add(1, 'months').toDate()
        this.setSelectedDate(date)
    }

    setPrevMonthSelectedDate() {
        let date = this.getSelectedDate()
        date = moment(date).subtract(1, 'months').toDate()
        this.setSelectedDate(date)
    }

    setDay(day) {
        const date = this.getSelectedDate()
        date.setDate(day)
        this.setSelectedDate(date)
    }
    
    setDayOfPrevMonth(day) {
        let date = this.getSelectedDate()
        
        date = moment(date).subtract(1, 'months').toDate()
        date.setDate(day)
        
        this.setSelectedDate(date)   
    }
    
    setDayOfNextMonth(day) {
        let date = this.getSelectedDate()
        
        date = moment(date).add(1, 'months').toDate()
        date.setDate(day)
        
        this.setSelectedDate(date)   
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

    getClassDiferentMonth() {
        return "menu_link diferent_month"
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
        const arrayOfLi = []
        
        getSnapshotOfActualMonth(this.getSelectedDate())
        .map( (d, i) => <li key={i + 'a'} className={this.getClassActiveDay(d)} onClick={this.setDay.bind(this, d)}>{d}</li>)
        .forEach( (f) => arrayOfLi.push(f))
        
        getSnapshotOfPrevMonth(this.getSelectedDate())
        .reverse()
        .map( (d, i) => <li key={i + 'p'} className={this.getClassDiferentMonth()} onClick={this.setDayOfPrevMonth.bind(this, d)}>{d}</li>)
        .forEach( (f) => arrayOfLi.unshift(f))
        
        getSnapshotOfNextMonth(this.getSelectedDate())
        .reverse()
        .map( (d, i) => <li key={i + 'n'} className={this.getClassDiferentMonth()} onClick={this.setDayOfNextMonth.bind(this, d)}>{d}</li>)
        .forEach( (f) => arrayOfLi.push(f))
        
        
        return arrayOfLi
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
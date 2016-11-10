import React from "react";
import ReactDOM from "react-dom";

import { getNameDayOfWeek, getSnapshotOfMonth, getFullMonth, getFullYear, getFullDay } from '../Utils/DateUtil';

export default class SetDate extends  React.Component {
    constructor() {
        super()
    }

    getSelectedDate(){
        return this.props.selectedDate
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
        const now = Date.now()
        if (getFullYear(now) === this.year() &&
            getFullMonth(now) === this.month() &&
            getFullDay(now) == day
        ){
            return "active"
        }else{
            return "inactive"
        }
    }

    snapshotOfMonth(){
        return getSnapshotOfMonth(this.getSelectedDate()).map( (d, i) => <li key={i} className={this.getClassActiveDay(d)}>{d}</li>)
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
                        <li class="prev">&#10094;</li>
                        <li class="next">&#10095;</li>
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
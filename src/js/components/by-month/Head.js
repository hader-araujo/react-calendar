import React from "react"
import moment from "moment"

import { CALENDAR_TYPE } from "../../Utils/Consts"
const { YEARLY } = CALENDAR_TYPE

export default class Head extends  React.Component {
    
    setPrevMonthSelectedDate() {
        let date = this.props.getSelectedDate()
        date = moment(date).subtract(1, 'months').toDate()
        this.props.setSelectedDate(date)
    }
    
    setNextMonthSelectedDate() {
        let date = this.props.getSelectedDate()
        date = moment(date).add(1, 'months').toDate()
        this.props.setSelectedDate(date)
    }
    
    setCalendarType(){
        this.props.setCalendarType(YEARLY)
    }

    render(){

        return (
            <div class="month">
                <ul>
                    <li>
                        <a href="#" class="prev menu_link" onClick={this.setPrevMonthSelectedDate.bind(this)} >&#10094;</a>
                    </li>
                    <li>
                        <a href="#" class="next menu_link" onClick={this.setNextMonthSelectedDate.bind(this)} > &#10095;</a>
                    </li>
                    <li>
                        <a href="#" className="menu_link" onClick={this.setCalendarType.bind(this)} > {this.props.month()} {this.props.year()} </a>
                    </li>
                </ul>
            </div>
        );
    }
}
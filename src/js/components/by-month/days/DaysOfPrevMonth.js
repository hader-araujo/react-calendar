import React from "react";
import moment from "moment";

import { getSnapshotOfPrevMonth } from '../../../Utils/DateUtil';

export default class DaysOfPrevMonth extends  React.Component {

    setDayOfPrevMonth(day) {
        let date = this.props.getSelectedDate()
        
        date = moment(date).subtract(1, 'months').toDate()
        date.setDate(day)
        
        this.props.setSelectedDate(date)   
    }
   
    snapshotOfMonth(){
        const arrayOfLi = []
        
        getSnapshotOfPrevMonth(this.props.getSelectedDate())
        .reverse()
        .map( (d, i) => <li key={i + 'p'} className={this.props.getClassDiferentMonth()} onClick={this.setDayOfPrevMonth.bind(this, d)}>{d}</li>)
        .forEach( (f) => arrayOfLi.unshift(f))
        
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
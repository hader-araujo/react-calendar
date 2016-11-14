import React from "react";
import moment from "moment";

import { getSnapshotOfNextMonth } from '../../../Utils/DateUtil';

export default class DaysOfNextMonth extends  React.Component {

    setDayOfNextMonth(day) {
        let date = this.props.getSelectedDate()
        
        date = moment(date).add(1, 'months').toDate()
        date.setDate(day)
        
        this.props.setSelectedDate(date)   
    }

    snapshotOfMonth(){
        const arrayOfLi = []
        
        getSnapshotOfNextMonth(this.props.getSelectedDate())
        .reverse()
        .map( (d, i) => <li key={i + 'n'} className={this.props.getClassDiferentMonth()} onClick={this.setDayOfNextMonth.bind(this, d)}>{d}</li>)
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
import React from "react";

import { getNameDayOfWeek } from '../../Utils/DateUtil';

export default class WeekDays extends  React.Component {
    
    nameDayOfWeek(){
        return getNameDayOfWeek().map( (d) => <li key={d}>{d}</li>)
    }
    
    render(){

        return (
            <ul class="weekdays">
                {this.nameDayOfWeek()}
            </ul>
        );
    }
}
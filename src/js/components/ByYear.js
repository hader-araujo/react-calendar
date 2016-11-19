import React from "react"
import moment from "moment"

import {renderIf} from 'react-render-if'

import { CALENDAR_TYPE, HOLIDAY_TYPE } from "../Utils/Consts"
const { PUBLIC } = HOLIDAY_TYPE
const { YEARLY, MONTHLY } = CALENDAR_TYPE

import {  getNameMonth } from '../Utils/DateUtil';

@renderIf(  
  x => x.props.calendarType == YEARLY
)
export default class ByYear extends  React.Component {

    setMonth(month) {
        let date = this.props.getSelectedDate()
        date = moment(date).set('month', month).toDate()
        this.props.setSelectedDate(date)
    }
    
    handleClick(month, event){
        this.setMonth(month)
        this.props.setCalendarType(MONTHLY)
        
    }

    render(){
        
        const months = getNameMonth().map( (elem, i) => <li key={i} className="menu_link" onClick={this.handleClick.bind(this, i)} >{elem}</li> )
        return (

            <ul class="months">
                {months}
            </ul>
        );
    }
}
ByYear.defaultProps = {
    selectedDate: Date.now()
}
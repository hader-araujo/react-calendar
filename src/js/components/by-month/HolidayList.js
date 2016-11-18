import React from "react";

import DaysOfPrevMonth from "./days/DaysOfPrevMonth"
import DaysOfActualMonth from "./days/DaysOfActualMonth"
import DaysOfNextMonth from "./days/DaysOfNextMonth"

export default class HolidayList extends  React.Component {
 
    render(){

	const holidayList = this.props.holidays? this.props.holidays.split(',').map( (elem) => <li key={elem}>{elem}</li>) : ""
	const head = this.props.holidays? <div>Holiday list</div> : ""
        return (

			<div>
			{head}
				<ul class="holiday-list">
						{holidayList}
				</ul>
			</div>

        );
    }
}
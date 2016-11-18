import React from "react";

import { getFullDate } from '../../Utils/DateUtil';

export default class HolidayList extends  React.Component {
 
    render(){
	
		const { holidays, getSelectedDate } = this.props
		
		const holidayList = holidays? holidays.split(',').map( (elem) => <li key={elem}>{elem}</li>) : ""
		const head = holidays? <div>Holiday list</div> : ""
	        return (
	
				<div>
					<div className="fullDate">
						{ getFullDate(getSelectedDate()) }
					</div>
					
					{head}
					<ul class="holiday-list">
							{holidayList}
					</ul>
				</div>
	
	        );
	    }
}
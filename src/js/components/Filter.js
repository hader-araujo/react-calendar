import React from "react";
import {renderIf} from 'react-render-if'

import { CALENDAR_TYPE, HOLIDAY_TYPE, COUNTRIES } from "../Utils/Consts"
const { ALL, PUBLIC } = HOLIDAY_TYPE
const { MONTHLY } = CALENDAR_TYPE

@renderIf(  
  x => x.props.calendarType == MONTHLY
)
export default class Filter extends React.Component {
    constructor() {
        super()
    }

	handleFilterType(event){
		this.props.setFilterType(event.target.value)
	}
	
	handleFilterCountry(event){
		this.props.setFilterCountry(event.target.value)
	}

    render(){
		const {filterType, filterCountry} = this.props
		
		const options = Object.keys(COUNTRIES).map( (key) => <option key={key} value={key}>{COUNTRIES[key]}</option> )

        return (
            <div>
				<select value={filterType} onChange={this.handleFilterType.bind(this)}>
				  <option value={ALL}>All Holidays</option>
				  <option value={PUBLIC}>Public Holidays</option>
				</select>
				
				<select value={filterCountry} onChange={this.handleFilterCountry.bind(this)}>
					{options}
				</select>
				
            </div>
        );
    }
}


import React from "react";

import DaysOfPrevMonth from "./days/DaysOfPrevMonth"
import DaysOfActualMonth from "./days/DaysOfActualMonth"
import DaysOfNextMonth from "./days/DaysOfNextMonth"

export default class Days extends  React.Component {

    getClassDiferentMonth() {
        return "menu_link diferent_month"
    }
    
    render(){

        return (

            <ul class="days">
                
                <DaysOfPrevMonth 
                    month={this.props.month}
                    year={this.props.year}
                    setSelectedDate={this.props.setSelectedDate}
                    getSelectedDate={this.props.getSelectedDate}
                    getClassDiferentMonth={this.getClassDiferentMonth.bind(this)}
                />
                
                <DaysOfActualMonth
                    month={this.props.month}
                    year={this.props.year}
                    setSelectedDate={this.props.setSelectedDate}
                    getSelectedDate={this.props.getSelectedDate}
					holidays={this.props.holidays}
                />
                
                <DaysOfNextMonth
                    month={this.props.month}
                    year={this.props.year}
                    setSelectedDate={this.props.setSelectedDate}
                    getSelectedDate={this.props.getSelectedDate}  
                    getClassDiferentMonth={this.getClassDiferentMonth.bind(this)}
                />

            </ul>

        );
    }
}
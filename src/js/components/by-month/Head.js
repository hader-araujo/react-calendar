import React from "react";
import moment from "moment";

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

    render(){

        return (
            <div class="month">
                <ul>
                    <li class="prev menu_link" onClick={this.setPrevMonthSelectedDate.bind(this)}>&#10094;</li>
                    <li class="next menu_link" onClick={this.setNextMonthSelectedDate.bind(this)}>&#10095;</li>
                    <li>
                        {this.props.month()} {this.props.year()}
                    </li>
                </ul>
            </div>
        );
    }
}
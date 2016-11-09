import React from "react";
import { connect } from "react-redux"

import SetDate from "../components/SetDate";
import FullDate from "../components/FullDate";

import { fetchDate, changeDate } from "../actions/CalendarActions"

@connect((store) => {
    return {
        selectedDate : store.calendar.selectedDate
    };
})
export default class ByMonth extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchDate())
    }

    changeDate(newDate) {
        this.props.dispatch(changeDate(newDate))
    }

    render(){
        const { selectedDate } = this.props;


        return (
            <div id="calendar">
                <div id="show-calendar">
                    <SetDate changeDate={this.changeDate.bind(this)} date={selectedDate} />
                    <FullDate date={selectedDate}/>
                </div>
            </div>
        );
    }
}
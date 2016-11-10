import React from "react";

import { getFullDate } from '../Utils/DateUtil';

export default class FullDate extends React.Component {
    constructor() {
        super()
    }

    getSelectedDate(){
        return getFullDate(this.props.selectedDate)
    }

    render(){
        return (
            <div>
                <h4>{this.getSelectedDate()}</h4>
            </div>
        );
    }
}

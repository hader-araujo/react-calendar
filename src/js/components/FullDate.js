import React from "react";

export default class FullDate extends React.Component {
    render(){
        const { date } = this.props;

        return (
            <div>
                <h4>{date}</h4>
            </div>
        );
    }
}

import React from "react";
import ReactDOM from "react-dom";

export default class SetDate extends  React.Component {
    constructor() {
        super();
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this.refs.inputDate).focus();
    }
    componentDidUpdate(){
        ReactDOM.findDOMNode(this.refs.inputDate).focus();
    }

    handleInputChange(e){
        const selectedDate = e.target.value;
        if (selectedDate) {
            this.props.changeDate(selectedDate);

            this.setState({selectedDate: ""});
        }
    }

    render(){
        const { date } = this.props;

        return (

            <div>
                <div class="input-group">
                    <input type="text" class="form-control" ref="inputDate" value={date} onChange={this.handleInputChange.bind(this)}/>
                </div>
            </div>
        );
    }
}
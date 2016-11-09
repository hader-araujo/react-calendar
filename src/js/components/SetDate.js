import React from "react";
import ReactDOM from "react-dom";

export default class SetDate extends  React.Component {
    constructor() {
        super();
        this.state = { selectedDate : ""};
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this.refs.inputDate).focus();
    }
    componentDidUpdate(){
        ReactDOM.findDOMNode(this.refs.inputDate).focus();
    }

    handleInputChange(e){
        const selectedDate = e.target.value;
        this.setState({selectedDate});
    }

    handleAddButton(){
        const selectedDate = this.state.selectedDate;
        if (selectedDate) {
            this.props.changeDate(selectedDate);

            this.setState({selectedDate: ""});
        }
    }

    render(){
        return (
            <div>
                <div class="input-group">
                    <input type="text" class="form-control" ref="inputDate" value={this.state.selectedDate} onChange={this.handleInputChange.bind(this)}/>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary" onClick={this.handleAddButton.bind(this)}>
                            Change date
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
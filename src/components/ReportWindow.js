import React, {Component} from 'react';
import '../App.css';
import Daily from "./Daily";
import Weekly from "./Weekly";
import SpecificDate from "./SpecificDate";
import NoRepeat from "./NoRepeat";
import {API_URL} from "../constants";

import axios from "axios";

class ReportWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            fileType: "Excel",
            email: '',
            selectedFrequency: "No Repeat",
            time: '',
            date: '',
            selectedOption: {value: 'Wednesday', label: 'Wednesday'},
        };
    }


    handleFileTypeChange = changeEvent => {
        this.setState({
            fileType: changeEvent.target.value
        });
    };

    handleRepeatChange = changeEvent => {
        this.setState({
            selectedFrequency: changeEvent.target.value
        });
    };

    handleChange = (changedEvent) => {
        this.setState({[changedEvent.target.name]: changedEvent.target.value})
    };

    handleDayChange = selectedOption => {
        this.setState(
            {selectedOption},
        );
    };


    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log(this.state);


        // fetch(API_URL, {
        //     method: 'post',
        //     mode: 'no-cors',
        //     headers: {
        //         'Accept': 'application/json, text/plain',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state)
        // })
        //     .then(res => {
        //         console.log(res);
        //         this.props.hideReportWindow();
        //         this.props.showResponseWindowOk();
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         this.props.showResponseWindowFalse();
        //     })
        axios.post(API_URL, this.state).then(res => {
                console.log(res);
                this.props.hideReportWindow();
                this.props.showResponseWindowOk();
            })
            .catch(err => {
                console.log(err);
                this.props.showResponseWindowFalse();
            })
    };


    render() {
        const {fileName, email} = this.state;

        return (
            <div>
                <h3 className="reportHeader">Export report</h3>
                <form onSubmit={this.handleFormSubmit} className="form-container">
                    <div className="form-row">
                        <div className="form-row-col1">
                            <p className="text">Report name</p>
                        </div>
                        <div className="form-row-col2">
                            <input
                                type='text'
                                className="box"
                                placeholder={"Your Report"}
                                name="fileName"
                                value={fileName}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-row-col1">
                            <p className="text">Format</p>
                        </div>
                        <div className="radio-container">
                            <input
                                className="spacing-first"
                                type="radio"
                                name="file_type"
                                value="Excel"
                                checked={this.state.fileType === "Excel"}
                                onChange={this.handleFileTypeChange}
                            />
                            Excel
                            <input
                                className="spacing-next"
                                type="radio"
                                name="file_type"
                                value="CSV"
                                checked={this.state.fileType === "CSV"}
                                onChange={this.handleFileTypeChange}
                            />
                            CSV
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-row-col1">
                            <p className="text">E-mail to</p>
                        </div>
                        <div className="form-row-col2">
                            <input
                                type="email"
                                className="box"
                                placeholder={"client@company.com"}
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-row-col1">
                            <p htmlFor="Schedule" className="label">Schedule</p>
                        </div>
                        <div className="radio-container-2">
                            <label htmlFor="No Repeat" className="spacing-first">
                                <input
                                    className="spacing-first"
                                    type="radio"
                                    name="schedule"
                                    value="No Repeat"
                                    checked={this.state.selectedFrequency === "No Repeat"}
                                    onChange={this.handleRepeatChange}
                                />
                                <p className="description">No Repeat</p>
                            </label>
                            <label htmlFor="Specific Date" className="spacing-first">
                                <input
                                    className="spacing-next"
                                    type="radio"
                                    name="schedule"
                                    value="Specific Date"
                                    checked={this.state.selectedFrequency === "Specific Date"}
                                    onChange={this.handleRepeatChange}
                                />
                                Specific Date
                            </label>
                            <label htmlFor="Daily" className="spacing-first">
                                <input
                                    className="spacing-next"
                                    type="radio"
                                    name="schedule"
                                    value="Daily"
                                    checked={this.state.selectedFrequency === "Daily"}
                                    onChange={this.handleRepeatChange}
                                />
                                Daily
                            </label>
                            <label htmlFor="Weekly" className="spacing-first">
                                <input
                                    className="spacing-next"
                                    type="radio"
                                    name="schedule"
                                    value="Weekly"
                                    checked={this.state.selectedFrequency === "Weekly"}
                                    onChange={this.handleRepeatChange}
                                />
                                Weekly
                            </label>
                        </div>
                    </div>
                    {(() => {
                        switch (this.state.selectedFrequency) {
                            case "Specific Date":
                                return <SpecificDate handleChange={this.handleChange}/>;
                            case "Weekly":
                                return <Weekly handleChange={this.handleChange} state={this.state}
                                               handleDayChange={this.handleDayChange}/>;
                            case "Daily":
                                return <Daily handleChange={this.handleChange}/>;
                            default:
                                return <NoRepeat/>;
                        }
                    })()}
                    <div className="form-row buttons-wrapper">
                        <button
                            className="btnWithe"
                            onClick={this.props.hideReportWindow}
                        >
                            Cancel
                        </button>
                        <button
                            className="btnBlack"
                            type="submit"
                        >
                            Ok
                        </button>
                    </div>
                </form>
            </div>
        )
            ;
    }
}

export default ReportWindow;
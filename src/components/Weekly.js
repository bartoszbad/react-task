import React, {Component} from 'react';
import Select from 'react-select';
import '../App.css';


const options = [
    {value: 'Monday', label: 'Monday'},
    {value: 'Tuesday', label: 'Tuesday'},
    {value: 'Wednesday', label: 'Wednesday'},
    {value: 'Thursday', label: 'Thursday'},
    {value: 'Friday', label: 'Friday'},
    {value: 'Saturday', label: 'Saturday'},
    {value: 'Sunday', label: 'Sunday'},
];


class Weekly extends Component {

    render() {

        return (<React.Fragment>
            <div className="weekly">
                <div className="form-row>">
                    <div className="form-row-col1-weekly">
                        <p className="text">Weekly</p>
                    </div>
                    <div className="form-row-col2-weekly">

                        <Select
                            className="form-select"
                            value={this.props.state.selectedOption}
                            name='selectedOption'
                            onChange={this.props.handleDayChange}
                            options={options}
                        />


                        <p className="text">at</p>
                        <input
                            className="box-3"
                            placeholder={"13:00"}
                            name='time'
                            onFocus={(e) => e.target.type = "time"}
                            onBlur={(e) => e.target.type = "text"}
                            onChange={this.props.handleChange}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default Weekly
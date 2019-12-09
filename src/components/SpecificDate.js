import React, {Component} from 'react';
import '../App.css';


class SpecificDate extends Component {
    render() {
        return (<React.Fragment>
            <div className="form-row">
                <div className="form-row-col1">
                    <p className="text">Date</p>
                </div>
                <input
                    className="box-2"
                    placeholder={"2019/05/22"}
                    name='date'
                    onFocus={(e) => e.target.type = "date"}
                    onBlur={(e) => e.target.type = "text"}
                    onChange={this.props.handleChange}
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

        </React.Fragment>);
    }
}

export default SpecificDate
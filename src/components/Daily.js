import React, {Component} from 'react';
import '../App.css';


class Daily extends Component {
    render() {
        return (<React.Fragment>

            <div className="form-row">
                <div className="form-row-col1">
                    <p className="text">Date</p>
                </div>
                <div className="form-row-col2">
                    <input
                        className="box-2"
                        placeholder={"13:00"}
                        name='time'
                        onFocus={(e) => e.target.type = "time"}
                        onBlur={(e) => e.target.type = "text"}
                        onChange={this.props.handleChange}
                    />
                </div>
            </div>
        </React.Fragment>);
    }
}

export default Daily
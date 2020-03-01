import React, {Component} from 'react';
import '../App.css';
import Modal from 'react-modal'
import ReportWindow from "./ReportWindow";

class Generate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showResponseOk: false,
            showResponseFalse: false,
        };
    };

    showReportWindow = () => {
        this.setState({show: true});
    };

    hideReportWindow = () => {
        this.setState({show: false});
    };

    showResponseWindowOk = () => {
        this.setState({showResponseOk: true});
    };

    hideResponseWindowOk = () => {
        this.setState({showResponseOk: false});
    };

    showResponseWindowFalse = () => {
        this.setState({showResponseFalse: true});
    };

    hideResponseWindowFalse = () => {
        this.setState({showResponseFalse: false});
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render() {

        const modalStyle = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '0px',
                width: '700px',
                padding: '0px',
                border: '1px solid #A6A3A4',
                boxShadow: '1px 1px 3px 3px #C9C5C6'
            },
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }
        };


        return (
            <div className="App">
                <Modal
                    style={modalStyle}
                    isOpen={this.state.show}
                    handleClose={this.hideReportWindow}
                >
                    <ReportWindow
                        hideReportWindow={this.hideReportWindow}
                        showResponseWindowOk={this.showResponseWindowOk}
                        showResponseWindowFalse={this.showResponseWindowFalse}
                    />
                </Modal>
                <button
                    className="btnGenerate"
                    type="button"
                    onClick={this.showReportWindow}
                >
                    Generate report for your company!
                </button>
                <Modal
                    style={modalStyle}
                    isOpen={this.state.showResponseOk}
                >
                    Your response was successful!
                    <p>
                        <button
                            type="button"
                            onClick={this.hideResponseWindowOk}
                        >
                            OK!
                        </button>
                    </p>
                </Modal>
                <Modal
                    style={modalStyle}
                    isOpen={this.state.showResponseFalse}
                >
                    Your response was unsuccessful!
                    <p>
                        <button
                            type="button"
                            onClick={this.hideResponseWindowFalse}
                        >
                            OK!
                        </button>
                    </p>
                </Modal>
            </div>
        );
    }
}

export default Generate;
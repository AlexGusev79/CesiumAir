import React, { Component } from "react";
import "./controlpanel.css";
class ControlPanel extends Component {
    render() {
        const { startStopButtonState, speedButtonState, handleStartStopClick, handleSpeedClick } = this.props;
        return (
            <div className="controlpanel">
                <div>
                    <button
                        value={startStopButtonState}
                        onClick={handleStartStopClick}>
                        {startStopButtonState ? "START" : "STOP"}
                    </button>
                </div>
                <div>
                    <button
                        value={speedButtonState}
                        onClick={handleSpeedClick}>
                        {speedButtonState ? "FFW" : "REG"}
                    </button>
                </div>
                <div className="speeds">
                    <button className="controlButton" >⏏️</button>
                    <button className="controlButton" >⏩</button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
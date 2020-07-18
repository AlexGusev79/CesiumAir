import React, { Component } from "react";
import "./hud.css";
import ControlPanel from "./controlpanel";
class HUD extends Component {
  render() {
    return (
      <div className="tools">
        <div className="clickTransparent hud">
          <div><input type="text" readOnly value={"Lat: "}></input></div>
          <div><input type="text" readOnly value={"Lon: "}></input></div>
          <div><input type="text" readOnly value={"Alt:  m"} ></input></div>
          <div><input type="text" readOnly value={"Vel:  mps"}></input></div>
          <div><input type="text" readOnly value={"Roll:  deg"}></input></div>
          <div><input type="text" readOnly value={"Pitch:  deg"}></input></div>
          <div><input type="text" readOnly value={"Yaw:  deg"}></input></div>
          <div><input type="text" readOnly value={"Time:  ms"}></input></div>
        </div>
        <div>
          <ControlPanel />
        </div>
      </div>
    );
  }
}
export default HUD;


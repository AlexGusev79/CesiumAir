import React from "react";
import MapViewer from "./mapViewer";
import HUD from "./hud";
import './background.css';
const Background = () => {
  // Background houses MapViewer and HUD element.
  // HUD element houses data and ControlPanel
  return (
    <div className="background">
      <MapViewer />
      <HUD />
    </div>
  );
}
export default Background;
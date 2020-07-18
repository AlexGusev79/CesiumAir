import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Cesium, { Cartesian3 } from 'cesium';
import { Viewer, Entity, ModelGraphics, CesiumWidget } from 'resium';
import model from "../assets/Cesium_Air.glb"
import "./mapViewer.css"

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NGI0N2M4Yi0yNTBmLTRkZWEtYWUzZS0yY2M0Y2EyNjNhMDYiLCJpZCI6ODQ2NCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1MjAwMDIwMX0._VBYmeYGfzwtt3fBIDw9KGT-8L7fTdcfEUo_mhkRgTk';

const viewerOptions = {
        homeButton: false, //home button
        fullscreenButton: false, // fullscreen button
        navigationHelpButton: false, // questionmark button
        infoBox: false, //model info box
        sceneModePicker: false, // x-ray globe button
        geocoder: false, // spyglass button
        baseLayerPicker: false, // bing maps button
        animation: false, // "clock"
        timeline: false, // "timeline bar" 
        //imageryProvider: false //This can be used to remove globe map
}


export default class MapViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lon: (139.76 + 139.767052) / 2,
      lat: (35.675 + 35.681167) / 2,
      alt: 0
    }
    // set interval timer to simulate moving object
    setInterval(() => (
      this.setState({ lon: this.state.lon + 0.000003, alt: this.state.alt + 0.2 })
    ), 300)
  }

  // This is the place where we can add "permanent" entities that do not need to be re-reawn
  componentDidMount() {
    // Get a hold of the viewer object that was set via Viewver "ref" attribute
    const { viewer } = this;
    // Make sure viewer is not undefined, otherwise skip this section
    if (viewer) {

      viewer.entities.add({
        name: 'Environment Box',
        position: Cesium.Cartesian3.fromDegrees((139.76 + 139.767052) / 2, (35.675 + 35.681167) / 2),
        box: {
          material: Cesium.Color.WHITE.withAlpha(0.25),
          dimensions: new Cesium.Cartesian3(400.0, 200.0, 200.0),
          fill: true,
          outline: true,
          outlineColor: Cesium.Color.RED
        },
        selected: true
      });

      // Position camera to show all entities
      viewer.zoomTo(viewer.entities);
    }
  }

  render() {
    return (      
      // The "ref" attribute below saves the reference to Viewer object as "this.viewver"
      <div>
      <Viewer className="mapViewer" ref={e => { this.viewer = e ? e.cesiumElement : null; }}         
        {...viewerOptions} //see whole bunch of features at the top
        full>
        <Entity selected tracked
          position={Cartesian3.fromDegrees(this.state.lon-0.001, (35.675 + 35.681167) / 2, this.state.alt)}
          name="Plane" >
          <ModelGraphics uri={model} />
        </Entity>
      </Viewer>
      </div>
    );
  }
}

import React from "react";
import taxi from "./taxi.svg";
import "./Marker.css";

class MapMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img src={taxi} className="marker" />;
  }
}

export default MapMarker;

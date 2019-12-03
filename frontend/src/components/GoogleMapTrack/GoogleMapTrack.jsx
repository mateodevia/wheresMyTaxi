import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

class GoogleMapTrack extends Component {
  miMap = null;

  renderMarkers(map, maps) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        map.panTo({ lat: this.props.lat, lng: this.props.lon });
        this.miMap = map;
      });
    }
  }

  componentDidUpdate() {
    if (this.miMap) {
      this.miMap.panTo({ lat: this.props.lat, lng: this.props.lon });
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "100vh",
          width: "100%",
          alt: "google map of that tracks the taxi driver location"
        }}
        alt="lo que sea"
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBQGovuMsVwP-HAiTWrNAVND5JfnikoPZ8" }}
          defaultCenter={{ lat: this.props.lat, lng: this.props.lon }}
          defaultZoom={17}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <MapMarker lat={this.props.lat} lng={this.props.lon} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapTrack;

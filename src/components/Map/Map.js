import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyle = {
  height: '200px',
  width: '200px'
};

export class MapItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false
    });
  }
  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: !this.state.showingInfoWindow
    });
  }

  render() {
    return (
      <Map 
          google = { this.props.google }
          zoom = { 14 }
          style = { mapStyle }
          initialCenter = { this.props.location }
          center = { this.props.location }>
        <Marker position = { this.props.location } 
                onClick={ this.onMarkerClick } />
        <InfoWindow marker = { this.state.activeMarker }
            visible = { this.state.showingInfoWindow }
            onClose = { this.onInfoWindowClose }>
          <h3> { this.props.address } </h3>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDSFNqoNb2-zScnVQSaG-emwNPCeANWqyc'
})(MapItem);
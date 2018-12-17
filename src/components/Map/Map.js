import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './Map.css'

const mapStyle = {
    height: '325px',
    width: '500px',
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
      <div className='map-wrapper'>
      <h3> Map </h3>
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDSFNqoNb2-zScnVQSaG-emwNPCeANWqyc'
})(MapItem);
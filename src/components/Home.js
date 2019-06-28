import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';


function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.512230, lng: -122.658722 }} />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Home() {
  return (
    <>
      <div style={{ width: '50vw', height: '50vh' }}>
        <WrappedMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBNx25Q_AsI8zjVrCP8JrGYV0ztRZo5L4Q"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </>
  );
}

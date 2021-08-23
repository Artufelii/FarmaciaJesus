import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'

const Map = withScriptjs(withGoogleMap(({ isMarkerShown }) => 
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 19.62700, lng: -99.10340 }}
    >
      <Marker position={{ lat: 19.62700, lng: -99.10340 }} />
    </GoogleMap>
  ))


export default Map

import React, { memo } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%',
}

const Map = () => (
  <LoadScript
    googleMapsApiKey='AIzaSyCwzgJybGfUgod0bYx4U78a7ZHPIPvBSEo'
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      defaultZoom={5}
      center={{ lat: 19.62700, lng: -99.10340 }}
    >
      <Marker position={{ lat: 19.62700, lng: -99.10340 }} />
    </GoogleMap>
  </LoadScript>
)


export default memo(Map)

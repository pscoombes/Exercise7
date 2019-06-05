import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) => 
        <GoogleMap
            defaultZoom={16}
            center={{ lat: props.coords.lat, lng: props.coords.lng }}
        >
            {props.isMarkerShown && <Marker position={{ lat: props.coords.lat, lng: props.coords.lng }} />}
        </GoogleMap>

));

export default Map;

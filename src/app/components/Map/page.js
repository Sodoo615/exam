"use client";
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from "react";
export default function Map() {
    const containerStyle = {
        width: '100vw',
        height: '400px'
    };

    const center = {
        lat:  47.92151557135592,
        lng:  106.96126107193967
    };
        const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        })
      
        const [map, setMap] = React.useState(null)
      
        const onLoad = React.useCallback(function callback(map) {
            // This is just an example of getting and using the map instance!!! don't just blindly copy!
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);
      
            setMap(map)
        }, [])
      
        const onUnmount = React.useCallback(function callback(map) {
            setMap(null)
        }, [])
      
        return isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        ) : <></>
    }


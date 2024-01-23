'use client';

import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import PlacesAutocomplete from './places-auto-complete';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { LocationProps } from '@/models/global-types';

const Map = ({ setLocation, location }: LocationProps) => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  const libraries = useMemo(() => ['places'], []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
    libraries: libraries as any,
  });

  const mapCenter = useMemo(
    () => ({ lat: location.lat, lng: location.lng }),
    [location.lat, location.lng]
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  if (!isLoaded) {
    return <p className='text-center'>Loading map...</p>;
  }

  return (
    <>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{
          width: '100%',
          height: '342px',
          borderRadius: '16px',
        }}
        onLoad={() => console.log('Map Component Loaded...')}>
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>

      <PlacesAutocomplete
        onAddressSelect={(address) => {
          getGeocode({ address: address }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);

            setLocation({
              lat: lat,
              lng: lng,
            });
          });
        }}
      />
    </>
  );
};

export default Map;

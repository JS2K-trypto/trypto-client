"use client";
import { useGeoLocation } from "./useGeoLocation";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000,
};

const Location = () => {
  const { location, error } = useGeoLocation(geolocationOptions);

  return (
    <div>
      <div>latitude: {location.latitude}</div>
      <div>longitude: {location.longitude}</div>
    </div>
  );
};

export default Location;

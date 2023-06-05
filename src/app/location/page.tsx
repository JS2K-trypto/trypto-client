"use client";
import { useGeoLocation } from "../badges/useGeoLocation";

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
      <a href="http://www.freepik.com">Designed by Freepik</a>
    </div>
  );
};

export default Location;

import React, { useEffect, useState } from "react";
import Input from "../common/Input";

import axios from "axios";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { ILocation } from "@/app/badges/useGeoLocation";

interface NewBadgeModalProps {
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  location: ILocation;
}

const containerStyle = {
  width: "400px",
  height: "400px",
};

export default function NewBadgeModal({
  onCancel,
  onSubmit,
  location,
}: NewBadgeModalProps) {
  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCQRsLZxWPz-iu8i5ilDbd7tUXvpIDubcI",
  });
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
  // });

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/staticmap?center=37.6373248,126.8350976&zoom=14&size=400x400&key=AIzaSyCQRsLZxWPz-iu8i5ilDbd7tUXvpIDubcI`
  //     )
  //     .then((res) => setMap(res.data))
  //     .catch((err) => console.error(err));
  // }, []);
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold px-5 mt-5">Get a New Badge</h2>
      <div className="flex flex-col px-5">
        <p className="mt-5 text-xl font-semibold">Your Position</p>
        <p className="">latitude: {location.latitude}</p>
        <p className="">longitude: {location.longitude}</p>
      </div>
      <div className="flex justify-center">
        <GoogleMap
          zoom={15}
          center={center}
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
      <div className="flex gap-5 border-t border-gray-300 p-5 mt-5">
        <button
          type="button"
          className="rounded-full shadow-md h-[50px] flex-1 bg-gray-50"
          onClick={onCancel}
        >
          cancel
        </button>
        <button
          type="submit"
          className="rounded-full shadow-md h-[50px] flex-1 bg-yellow-300"
        >
          Ok
        </button>
      </div>
    </form>
  );
}

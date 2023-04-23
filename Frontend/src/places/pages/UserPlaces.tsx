import React, { useCallback, useEffect } from "react";
import { IPlaceItemProps } from "../components/PlaceItem";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
import axios from "axios";
import ErrorAlert from "../../shared/UIElement/Error";

const DUMMY_PLACES: IPlaceItemProps[] = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];
const UserPLaces = () => {
  const userId = useParams().userId;
  console.log("userId", useParams());
  const fetchUserPlaces = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/places/user/${userId}`
      );
      console.log("data===", data);
    } catch (e: any) {
      console.log("e===", e.response.message);
      <ErrorAlert message="Something went wrong!" />;
    }
  }, []);
  useEffect(() => {
    fetchUserPlaces();
  }, [userId]);

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  console.log("loadedPlaces", loadedPlaces);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPLaces;

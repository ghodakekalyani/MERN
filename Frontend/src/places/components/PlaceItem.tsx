import React from "react";
import Button from "../../shared/FormElements/Button";
import "./PlaceItem.less";

interface ILocation {
  lat: number;
  lng: number;
}

export interface IPlaceItemProps {
  id: string;
  key?: string;
  imageUrl: string;
  creator: string;
  title: string;
  location: ILocation;
  address: string;
  description: string;
}

const PlaceItem = (props: IPlaceItemProps) => {
  return (
    <li className="place-item">
      <div className="place-item__image">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="place-item__info">
        <h2>{props.title}</h2>
        <h3>{props.address}</h3>
        <p>{props.description}</p>
      </div>
      <div className="place-item__actions">
        <Button inverse>VIEW ON MAP</Button>
        <Button to={`/places/${props.id}`}>EDIT</Button>
        <Button danger>DELETE</Button>
      </div>
    </li>
  );
};

export default PlaceItem;

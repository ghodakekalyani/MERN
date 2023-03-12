import React from "react";
import Card from "../../shared/UIElement/Card";
import PlaceItem, { IPlaceItemProps } from "./PlaceItem";
import "./PlaceList.less";

interface IPlaceListProps {
  items: IPlaceItemProps[] | [];
}

const PlaceList = ({ items }: IPlaceListProps) => {
  if (items.length === 0) {
    return (
      <Card className="place_list center">
        <h2>No Place Found.</h2>
      </Card>
    );
  }

  return (
    <ul className="place-list">
      {items.map((place: IPlaceItemProps) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            imageUrl={place.imageUrl}
            creator={place.creator}
            title={place.title}
            location={place.location}
            address={place.address}
            description={place.description}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;

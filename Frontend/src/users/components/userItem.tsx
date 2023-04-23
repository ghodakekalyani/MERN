import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/UIElement/Avatar";
import Card from "../../shared/UIElement/Card";
import "./userItem.less";

export interface IUserItemProps {
  id: string;
  placeCount?: number;
  image?: string;
  name: string;
  key?: string;
  places?: number;
}

const UserItem = ({ id, image, placeCount, name }: IUserItemProps) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;

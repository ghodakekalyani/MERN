import React from "react";
import Card from "../../shared/UIElement/Card";
import UserItem, { IUserItemProps } from "./userItem";
import "./userList.less";

interface IUsersListProps {
  users: IUserItemProps[] | [];
}

const UserList = ({ users }: IUsersListProps) => {
  if (users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No user found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {users.map((user: IUserItemProps) => (
        <UserItem
          key={user.id}
          placeCount={user.places}
          id={user.id}
          image={user.image}
          name={user.name}
        />
      ))}
    </ul>
  );
};

export default UserList;

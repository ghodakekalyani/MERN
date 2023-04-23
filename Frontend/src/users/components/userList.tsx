import React from "react";
import Card from "../../shared/UIElement/Card";
import UserItem, { IUserItemProps } from "./userItem";
import "./userList.less";
import { IUserState } from "../../redux/reducers/userReducer";

interface IUsersListProps {
  users: IUserState[] | [];
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
      {users.map((user: IUserState) => (
        <UserItem
          key={user.id}
          placeCount={user.places.length}
          id={user.id}
          name={user.name}
        />
      ))}
    </ul>
  );
};

export default UserList;

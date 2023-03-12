import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
// import { Button } from "@mui/material";
import { fetchUserName } from "../../shared/userReducer";
import { IUserItemProps } from "../components/userItem";
import UserList from "../components/userList";

const Users = () => {
  const users: IUserItemProps[] = [
    {
      id: "u1",
      name: "kalyani ghodake",
      image:
        "https://i.natgeofe.com/k/5af79b71-007d-46f8-8efe-bf37a504195b/california-golden-gate-bridge.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "kalyani ghodake",
      image:
        "https://fox40.com/wp-content/uploads/sites/13/2022/07/GettyImages-1308695861.jpg?strip=1",
      places: 1,
    },
  ];

  return (
    <>
      <UserList users={users} />
    </>
  );
};

export default Users;

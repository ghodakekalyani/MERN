import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
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

  const [newUsers, setNewUsers] = useState<IUserItemProps[]>([]);

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/users");
      console.log("data=====>", data.users);
      const users = await data.users;
      console.log("data users=====>", data.users);
      setNewUsers((pre) => users);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {console.log("newusers----", newUsers)}
      {newUsers.length >= 0 && <UserList users={newUsers} />}
    </>
  );
};

export default Users;

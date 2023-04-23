import axios from "axios";
import React, { useCallback, useEffect, useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import { Button } from "@mui/material";
// import { fetchUserName } from "../../redux/reducers/userReducer";
import { IUserItemProps } from "../components/userItem";
import UserList from "../components/userList";
import { FetchUserDataArgs, fetchUsers } from "../../redux/methods/user";
import { useAppDispatch } from "../../hooks/useTypeSelector";
import userReducer, { initialState } from "../../redux/reducers/userReducer";
import { apiRoutes } from "../../redux/apiRoutes";

const Users = () => {
  const [newUsers, setNewUsers] = useState<IUserItemProps[]>([]);
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  console.log("data=========", data, isLoading, error);

  return <>{data?.users?.length >= 0 && <UserList users={data.users} />}</>;
};

export default Users;

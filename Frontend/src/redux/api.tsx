import axios from "axios";
import { IUserState } from "./reducers/userReducer";

export interface IAxiosConfig {
  method: string;
  url: string;
  data?: any;
}

export const callApi = ({
  url,
  method,
  data,
}: IAxiosConfig): Promise<IUserState[]> => {
  const axiosConfig: IAxiosConfig = {
    method,
    url,
    data,
  };
  return axios(axiosConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

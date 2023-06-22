import axios from "axios";
const URL = process.env.NEXT_PUBLIC_BASE_URL;

export const noAuthGet = async (apiURL: string, params?: any) => {
  return axios.get(`${URL}/${apiURL}`);
};

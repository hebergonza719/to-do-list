import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  // the api expects Authorization to have a token
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "http://localhost:3300/api"
  });
};
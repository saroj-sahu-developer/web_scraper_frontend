import axios from "axios";
import { API_BASE_URL } from "../constants";

const urlPath = (path) => {
  return API_BASE_URL + path;
};

export const get = async (path) => {
  try {
    const response = await axios.get(urlPath(path));
    return response.data; 
  } catch (error) {
    throw error;
  }
};

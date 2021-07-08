import axios from "axios";

export const getData = async (name) => {
  const response = await axios.get(`https://api.thecatapi.com/v1/breeds/search?name=${name}`);
  return response;
};

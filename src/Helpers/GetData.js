import axios from "axios";

export const getData = async () => {
  const response = await axios.get("https://api.thecatapi.com/v1/breeds");
  return response;
};

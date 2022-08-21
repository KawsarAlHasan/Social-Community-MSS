import axios from "axios";

const API = axios.create({
  baseURL: "https://enigmatic-ocean-28315.herokuapp.com/",
});
export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);

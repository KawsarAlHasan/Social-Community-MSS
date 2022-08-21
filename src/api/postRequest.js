import axios from "axios";

const API = axios.create({
  baseURL: "https://powerful-plains-57380.herokuapp.com",
});
export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);

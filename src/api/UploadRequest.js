import axios from "axios";

const API = axios.create({ baseURL: "https://enigmatic-ocean-28315.herokuapp.com" });

export const uploadImage = (data) => API.post("/upload", data);

export const uploadPost = (data) => API.post("/post", data);

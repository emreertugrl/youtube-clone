import axios from "axios";
const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "c5c43686d8msh20a5439643be6abp126457jsnf45eef1e89ab",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});
export default api;

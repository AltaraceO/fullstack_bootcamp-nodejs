import axios from "axios";

let url;

if (process.env.NODE_ENV === "development") {
  url = "http://localhost:5000/api";
}

if (process.env.NODE_ENV === "production") {
  url = "api";
}

const weatherAPI = axios.create({
  baseURL: url,
});

export default weatherAPI;

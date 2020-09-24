import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3ejfPz5pxpXyCYnC8CvhnXQF0WbtH39NMcno-pG3YBE",
  },
});

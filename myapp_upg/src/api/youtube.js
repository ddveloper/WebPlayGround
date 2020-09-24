import axios from "axios";

const KEY = "AIzaSyCG8knY2CfsrWPIMhWxoplJ0L1PsvL3_Ms";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

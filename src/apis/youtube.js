import axios from "axios";
const KEY = "AIzaSyDOdtV7E4yQB5-KTZiNPjKv24HLvkKQ_Co";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    // type: video,
    maxResults: 5,
    key: KEY,
  },
});

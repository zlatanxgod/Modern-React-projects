import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID fwCTtG2JmMo6g8r4gTwDvrjCsSXpXjRnQKP9LkpY7Mk",
  },
});

import axios from "axios";

export default {
  // Get Players
  getPlayers() {
    return axios.get("/api/lakers");
  },
  postPlayers() {
    return axios.post("/api/lakers");
  },
};

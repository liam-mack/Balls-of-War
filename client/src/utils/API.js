/* eslint-disable */
import axios from "axios";

export default {
  // Get Players
  getPlayers(team) {
    return axios.get(`/api/${team}`);
  },
  postPlayers() {
    return axios.post("/api/lakers");
  },
};

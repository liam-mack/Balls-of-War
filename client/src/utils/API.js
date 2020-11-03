/* eslint-disable */
import axios from "axios";

export default {
  // Get Players
  async getPlayers(team) {
    return await axios.get(`/api/${team}`);
  },
  postPlayers() {
    return axios.post("/api/lakers");
  },
};

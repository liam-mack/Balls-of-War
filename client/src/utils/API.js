import axios from "axios";

export default {
  // Get Players
  getPlayers() {
    return axios.get("/api/lakers");
  },
};

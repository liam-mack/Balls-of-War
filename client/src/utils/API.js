import axios from "axios";

export default {
  // Get Players
  getPlayers: function() {
    return axios.get("/api/lakers");
  },
  postPlayers: function() {
    return axios.post("/api/lakers");
  }
};

/* eslint-disable */
import axios from "axios";

export default {
  // Get Players
  async getPlayers(team) {
    return await axios.get(`/api/${team}`);
  },
  async postPlayers() {
    return axios.post("/api/lakers");
  },
  async signUp() {
    return await axios.post("/signup");
  },
  async createGame(players) {
    return await axios.post("/api/game", players);
  },
  async getGame(id) {
    console.log(id);
    return await axios.get(`/api/game/${id.session}`);
  },
  async playGame(id,method,stat) {
    console.log(method);
    console.log(id);

    return await axios.put(`/api/game/${id}/${method}`, {stat} )

  }
   
};

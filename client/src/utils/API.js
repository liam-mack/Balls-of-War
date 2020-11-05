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
  async signUp(data) {
    console.log(data)
    return await axios.post("/api/signup", data);
  },
  async createGame(players) {
    return axios.post("/api/game", players);
  },
  async getGame(id) {
    console.log(id);
    return await axios.get(`/api/game/${id.session}`);
  },
  async playGame(id,method,stat) {
    console.log(method, id, stat);
    return await axios.put(`/api/game/${id}/${method}`, {stat} )
  }
   
};

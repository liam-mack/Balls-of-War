import axios from "axios";

export default {
  async signUp(data) {
    console.log(data);
    return axios.post("/api/signup", data);
  },
  // Create game
  async createGame(players) {
    return axios.post("/api/game", players);
  },
  // Get game id
  async getGame(id) {
    console.log(id);
    return axios.get(`/api/game/${id.session}`);
  },
  // Play game with an action
  async playGame(id, method, stat) {
    console.log(method, id, stat);
    return axios.put(`/api/game/${id}/${method}`, { stat });
  },
};

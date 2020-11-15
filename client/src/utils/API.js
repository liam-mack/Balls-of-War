import axios from "axios";

export default {
  async getUser() {
    return axios.get("/user");
  },

  async signup(data) {
    return axios.post("/auth/signup", data);
  },

  // Create game
  async createGame(players) {
    return axios.post("api/game/create", players);
  },
  // Check active game
  async checkUser() {
    return axios.get("/api/game/check");
  },
  // Get game id
  async getGame(id) {
    console.log(id);
    return axios.get(`/api/game/${id.session}`);
  },
  // Play game with an action
  async playGame(id, method, stat) {
    return axios.put(`/api/game/${id}/${method}`, { stat });
  },
};

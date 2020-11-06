import axios from "axios";

export default {
  async signUp(data) {
    console.log(data);
    return axios.post("/signup", data);
  },
  async login(data) {
    return axios.post("/login", data);
  },
  // Create game
  async createGame(players) {
    return axios.post("api/game/create", players);
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

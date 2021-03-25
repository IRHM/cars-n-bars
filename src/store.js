import { createStore } from "vuex";
import data from "./data.js";

export default createStore({
  state: {
    cars: data(),
  },
  actions: {
    onSetYear: ({ commit }, year) => {
      commit("setYear", year);
    },
  },
  mutations: {
    setYear: (state, year) => {
      state.year = year;
    },
  },
  getters: {
    getCar: (state, id) => {
      return state.cars.filter((state) => id == state.cars.id);
    },
  },
});

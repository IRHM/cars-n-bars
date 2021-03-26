import { createStore } from "vuex";
import data from "./data.js";

export default createStore({
  state: {
    cars: data(),
  },
  actions: {
    deleteCar: ({ commit }, car) => {
      commit("deleteCar", car);
    },
  },
  mutations: {
    deleteCar: (state, car) => {
      let carIndex = state.cars.findIndex((e) => e.id == car.id);
      state.cars.splice(carIndex, 1);
    },
  },
  getters: {
    getCar: (state, id) => {
      return state.cars.filter((state) => id == state.cars.id);
    },
  },
});

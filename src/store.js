import { createStore } from "vuex";
import { deleteCar } from "./data";

export default createStore({
  state: {
    cars: [],
  },
  actions: {
    deleteCar: ({ commit }, car) => {
      commit("deleteCar", car);
    },
  },
  mutations: {
    deleteCar: (state, car) => {
      state.cars = state.cars.filter((e) => e.id != car.id);
      deleteCar(car.id);
    },
    initCars: (state, cars) => {
      state.cars = cars;
    },
  },
  getters: {
    getCar: (state, id) => {
      return state.cars.filter((state) => id == state.cars.id);
    },
  },
});

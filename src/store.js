import { createStore } from "vuex";

export default createStore({
  state: {
    cars: "",
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
    addCars: (state, cars) => {
      state.cars = cars;
    },
  },
  getters: {
    getCar: (state, id) => {
      return state.cars.filter((state) => id == state.cars.id);
    },
  },
});

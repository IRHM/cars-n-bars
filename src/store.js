import { createStore } from "vuex";
import { deleteCar } from "./data";

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
      deleteCar(carIndex);
    },
    addCars: (state, cars) => {
      var carz = cars.filter(function(item) {
        return item !== undefined;
      });

      state.cars = carz;
    },
  },
  getters: {
    getCar: (state, id) => {
      return state.cars.filter((state) => id == state.cars.id);
    },
  },
});

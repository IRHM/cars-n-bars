<template>
  <div class="container">
    <CarsList />
  </div>
</template>

<script>
import CarsList from "./components/CarsList.vue";
import "./../node_modules/bulma/css/bulma.min.css";

export default {
  name: "App",
  components: {
    CarsList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

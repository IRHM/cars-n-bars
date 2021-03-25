<template>
  <div class="hello">
    <h3>{{ state.cars[0].make }}z</h3>
    <li v-for="item in state.cars" :key="item.id">{{ item.make }}</li>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "List",
  props: {
    items: String,
  },
  setup() {
    const { state } = useStore();
    return {
      state,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

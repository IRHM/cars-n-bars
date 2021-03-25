<template>
  <div>
    <h1 class="title">{{ currentCar.make }} {{ currentCar.model }}</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Car",
  props: {
    car: String,
  },
  data() {
    return {
      currentCar: JSON.parse(this.$route.params.car),
    };
  },
});
</script>

<style scoped></style>

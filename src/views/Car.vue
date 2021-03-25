<template>
  <div>
    <h1>{{ currentCar }}</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Car",
  props: {
    car: Object,
  },
  data() {
    return {
      currentCar: JSON.parse(this.$route.params.car),
    };
  },
});
</script>

<style scoped></style>

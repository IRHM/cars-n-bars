<template>
  <div class="box">
    <h1 class="title is-1">{{ currentCar.make }} {{ currentCar.model }}</h1>

    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Price</p>
          <div>
            <span class="subtitle">$</span>
            <span class="title">{{ currentCar.price }}</span>
          </div>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Transmission</p>
          <p class="title">{{ currentCar.transmission }}</p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Body Type</p>
          <p class="title">{{ currentCar.bodyType }}</p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Doors</p>
          <p class="title">{{ currentCar.doors }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Fuel</p>
          <p class="title">{{ currentCar.fuel }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Mileage</p>
          <div>
            <span class="title">{{ currentCar.mileage }}</span>
            <span class="subtitle">MI</span>
          </div>
        </div>
      </div>
    </nav>

    <figure class="image">
      <img :src="currentCar.image" alt="" style="object-fit: cover;" />
    </figure>
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

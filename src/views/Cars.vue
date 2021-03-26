<template>
  <div>
    <h1 class="title">Cars</h1>

    <div v-if="state.cars.length > 0" class="columns is-multiline">
      <router-link
        class="column is-half car"
        :to="{ name: 'car', params: { car: JSON.stringify(item) } }"
        v-for="item in state.cars"
        :key="item.id"
      >
        <div class="tile is-child box">
          <div class="columns">
            <div class="column">
              <figure class="image is-4by3">
                <img
                  :src="item.image"
                  alt="Car Image"
                  style="object-fit: cover;"
                />
              </figure>

              <div class="info-box">
                <h1 class="title">{{ item.model }}</h1>
                <h4 class="subtitle">${{ item.price }}</h4>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div v-else>
      <h1 class="subtitle">No Cars Found</h1>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarsList",
  setup() {
    const { state } = useStore();
    return {
      state,
    };
  },
});
</script>

<style scoped>
.column.car {
  transition: transform 50ms ease-in-out;
}

.column.car:hover {
  transform: scale(1.02);
}

.info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  height: 100%;
}

h4 {
  font-size: 20px;
}
</style>

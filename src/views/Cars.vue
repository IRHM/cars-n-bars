<template>
  <div>
    <h1>Cars</h1>

    <br />

    <div class="columns is-multiline">
      <div class="column is-half car" v-for="item in state.cars" :key="item.id">
        <div class="tile is-child box">
          <div class="columns">
            <div class="column">
              <figure class="image is-4by3" style="object-fit: cover;">
                <img :src="item.image" alt="Placeholder image" />
              </figure>

              <router-link
                :to="{ name: 'car', params: { car: JSON.stringify(item) } }"
              >
                <div class="info-box">
                  <h1 class="title">{{ item.model }}</h1>
                  <h4 class="subtitle">${{ item.price }}</h4>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
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
.info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  height: 100%;
}

h1 {
  font-size: 40px;
  font-weight: bolder;
}
h4 {
  font-size: 20px;
}
</style>

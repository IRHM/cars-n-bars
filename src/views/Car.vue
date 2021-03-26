<template>
  <div>
    <nav class="level">
      <div class="level-left" style="margin: 5px 0px;">
        <BackButton class="level-item" style="float: left; margin: 5px;" />
      </div>

      <div class="level-right" style="margin: 5px 0px;">
        <button
          @click="toggleEditMode"
          class="button level-item"
          style="margin: 5px;"
        >
          <Icon icon="pen" style="padding-right: 5px;" /> Edit
        </button>

        <button class="button level-item is-danger" style="margin: 5px;">
          <Icon icon="pen" style="padding-right: 5px;" /> Delete
        </button>
      </div>
    </nav>

    <div class="box">
      <h1 v-if="!isEditing" class="title is-1">
        {{ currentCar.make }} {{ currentCar.model }}
      </h1>
      <div v-else class="car-name-input columns is-centered">
        <input
          class="input title is-3"
          type="text"
          :placeholder="currentCar.make"
          v-model="currentCar.make"
        />
        <input
          class="input title is-3"
          type="text"
          :placeholder="currentCar.model"
          v-model="currentCar.model"
        />
      </div>

      <nav class="level">
        <div class="field has-text-centered">
          <p class="heading">Price ($)</p>

          <p v-if="!isEditing" class="title">${{ currentCar.price }}</p>
          <div v-else class="control">
            <input
              class="input"
              type="text"
              :placeholder="currentCar.price"
              v-model="currentCar.price"
            />
          </div>
        </div>

        <div class="field">
          <p class="heading">Transmission</p>

          <p v-if="!isEditing" class="title">{{ currentCar.transmission }}</p>
          <div v-else class="control">
            <div class="select" id="v-model-select">
              <select v-model="currentCar.transmission">
                <option>Manual</option>
                <option>Automatic</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-text-centered">
          <p class="heading">Body Type</p>

          <p v-if="!isEditing" class="title">{{ currentCar.bodyType }}</p>
          <div v-else class="control">
            <input
              class="input"
              type="text"
              :placeholder="currentCar.bodyType"
              v-model="currentCar.bodyType"
            />
          </div>
        </div>

        <div class="control">
          <p class="heading">Doors</p>

          <p v-if="!isEditing" class="title">{{ currentCar.doors }}</p>
          <div v-else class="control" id="v-model-radiobutton">
            <label class="radio">
              <input
                type="radio"
                name="answer"
                value="2"
                :checked="currentCar.doors == 2 ? `checked` : ``"
                v-model="currentCar.doors"
              />
              2
            </label>

            <label class="radio">
              <input
                type="radio"
                name="answer"
                value="3"
                :checked="currentCar.doors == 3 ? `checked` : ``"
                v-model="currentCar.doors"
              />
              3
            </label>

            <label class="radio">
              <input
                type="radio"
                name="answer"
                value="4"
                :checked="currentCar.doors == 4 ? `checked` : ``"
                v-model="currentCar.doors"
              />
              4
            </label>
          </div>
        </div>

        <div class="field">
          <p class="heading">Fuel</p>

          <p v-if="!isEditing" class="title">{{ currentCar.fuel }}</p>
          <div v-else class="control">
            <div class="select" :value="currentCar.fuel" id="v-model-select">
              <select v-model="currentCar.fuel">
                <option>Petrol</option>
                <option>Diesel</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field has-text-centered">
          <p class="heading">Mileage</p>

          <div v-if="!isEditing">
            <span class="title">{{ currentCar.mileage }}</span>
            <span class="subtitle">MI</span>
          </div>
          <div v-else class="control">
            <input
              class="input"
              type="text"
              :placeholder="currentCar.mileage"
              v-model="currentCar.mileage"
            />
          </div>
        </div>
      </nav>

      <div v-if="isEditing" class="field has-text-centered">
        <p class="heading">Car Image Link</p>
        <div class="control">
          <input
            class="input"
            type="text"
            :placeholder="currentCar.image"
            v-model="currentCar.image"
          />
        </div>
      </div>

      <figure class="image">
        <img :src="currentCar.image" alt="" style="object-fit: cover;" />
      </figure>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BackButton from "./../components/buttons/BackButton.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Car",
  components: {
    BackButton,
  },
  props: {
    car: String,
  },
  setup() {
    const { state } = useStore();
    return {
      state,
    };
  },
  data() {
    return {
      currentCar: JSON.parse(this.$route.params.car),
      // If in edit mode
      isEditing: false,
    };
  },
  methods: {
    updateCar: function() {
      this.state.cars[this.currentCar.id - 1] = this.currentCar;
    },
    toggleEditMode: function() {
      if (this.isEditing == false) {
        this.isEditing = true;
      } else {
        this.isEditing = false;
      }
    },
  },
});
</script>

<style scoped>
.car-name-input input {
  height: 50px;
  width: 20%;
  padding: 10px;
}
</style>

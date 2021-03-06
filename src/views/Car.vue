<template>
  <div>
    <nav class="level">
      <div class="level-left" style="margin: 5px 0px;">
        <BackButton class="level-item" style="float: left; margin: 5px;" />
      </div>

      <div class="level-right" style="margin: 5px 0px;">
        <button
          v-if="!isEditing"
          @click="toggleEditMode"
          class="button level-item"
          style="margin: 5px;"
        >
          <Icon icon="pen" style="padding-right: 5px;" /> Edit
        </button>
        <button
          v-else
          @click="updateCar"
          class="button level-item"
          style="margin: 5px;"
        >
          <Icon icon="pen" style="padding-right: 5px;" /> Save
        </button>

        <button
          @click="deleteCar"
          class="button level-item is-danger"
          style="margin: 5px;"
        >
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
          :placeholder="currentCar.make ? currentCar.make : 'Make'"
          v-model="currentCar.make"
        />
        <input
          class="input title is-3"
          type="text"
          :placeholder="currentCar.model ? currentCar.model : 'Model'"
          v-model="currentCar.model"
        />
      </div>

      <nav class="level">
        <div class="field has-text-centered">
          <p class="heading">Price</p>

          <div v-if="!isEditing">
            <span class="subtitle">$</span>
            <span class="title">{{ currentCar.price }}</span>
          </div>
          <div v-else class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                :placeholder="currentCar.price"
                v-model="currentCar.price"
              />
              <span class="icon is-small is-left">
                <Icon
                  icon="dollar-sign"
                  size="2x"
                  style="padding-right: 5px; font-weight: bold;"
                />
              </span>
            </p>
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

        <div class="field has-text-centered">
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
          <div v-else class="field">
            <p class="control has-icons-right has-icons-right">
              <input
                class="input"
                type="text"
                :placeholder="currentCar.mileage"
                v-model="currentCar.mileage"
              />
              <span class="icon is-small is-right">
                MI
              </span>
            </p>
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
import { addCar } from "./../data";

export default defineComponent({
  name: "Car",
  components: {
    BackButton,
  },
  props: {
    action: String,
    car: String,
  },
  setup() {
    const { state } = useStore();
    return {
      state,
    };
  },
  mounted() {
    if (this.action != undefined) {
      if (JSON.parse(this.action) == "newCar") {
        this.isNewCar = true;
        this.isEditing = true;
      }
    }
  },
  data() {
    return {
      currentCar: JSON.parse(this.$route.params.car),
      // If in edit mode
      isEditing: false,
      isNewCar: false,
    };
  },
  methods: {
    updateCar: function() {
      if (this.currentCar.doors === "") {
        this.currentCar.doors = "4";
      }

      if (this.isNewCar) {
        let lastCar = this.state.cars[this.state.cars.length - 1];

        console.log(`new car: `, lastCar);
        if (lastCar != undefined) {
          this.currentCar.id = lastCar.id + 1;
        } else {
          this.currentCar.id = 0;
        }

        this.state.cars.push(this.currentCar);
      } else {
        this.state.cars[this.currentCar.id] = this.currentCar;
      }

      addCar(this.currentCar);

      // Toggle out of editing mode
      this.toggleEditMode();
    },
    deleteCar: function() {
      // Dispatch deleteCar action then return to cars page
      this.$store.dispatch("deleteCar", this.currentCar);
      this.$router.replace("/cars");
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

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

createApp(App)
  .use(store)
  .use(router)
  .component("Icon", FontAwesomeIcon)
  .mount("#app");

// Go to cars page as default page
router.replace("/cars");

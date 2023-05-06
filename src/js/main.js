import { createApp } from "vue";
import "../style.css";
import App from "../App.vue";
import { router } from "../router";
import { store } from "../store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});

// Vue3 Typer
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);
app.use(VueTyper);
app.mount("#app");
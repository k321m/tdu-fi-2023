import { createApp } from "vue";
import "/src/style.css";
import App from "/src/App.vue";

//Vue3 Typer
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(VueTyper);
app.use(vuetify);
app.mount("#app");

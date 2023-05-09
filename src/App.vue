<template>
  <v-app>
    <div>
      <v-navigation-drawer app v-model="drawer">
        <v-list nav>
          <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar elevation="0" app>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </v-app-bar>
    </div>

    <v-main>
      <div id="particles-js"></div>
      <router-view />
    </v-main>
    <div class="pt-2">
      <v-footer color="black" height="56px" absolute app>
        <div class="w-100">
          <p class="text-center hack">inue研</p>
        </div>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: false,
      menus: [
        { title: "Index", icon: "mdi-web", url: "/" },
        { title: "Home", icon: "mdi-home", url: "/my-note" },
        { title: "Favorites", icon: "mdi-heart", url: "/favorites" },
        { title: "About", icon: "mdi-information-variant", url: "/about" },
      ],
    };
  },
};
</script>

<style scoped></style>

<template>
  <v-app>
    <v-app-bar elevation="0" hide-on-scroll app>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
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
        { title: "Home", icon: "mdi-home", url: "/home" },
        { title: "Favorites", icon: "mdi-heart", url: "/favorites" },
        { title: "About", icon: "mdi-information-variant", url: "/about" },
      ],
    };
  },
};
</script>

<style scoped></style>

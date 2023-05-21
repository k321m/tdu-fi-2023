<template>
  <v-app>
    <div>
      <v-navigation-drawer app v-model="drawer">
        <v-list nav>
          <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
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
          <p class="text-center hack" @click="$store.commit('deleteAllMyNote')">
            Created by inue研
          </p>
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
      open: false,
      menus: [
        { title: "トップ", icon: "mdi-web", url: "/" },
        { title: "MyNote", icon: "mdi-home", url: "/my-note" },
        { title: "研究室公開", icon: "mdi-heart", url: "/labs" },
        { title: "講義動画", icon: "mdi-information-variant", url: "" },
        { title: "具体的な質問例", icon: "mdi-information-variant", url: "" },
      ],
    };
  },
};
</script>

<style scoped></style>

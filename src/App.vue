<template>
  <v-app>
    <div>
      <transition name="fade">
        <!-- <v-navigation-drawer app v-model="drawer">
        <v-list nav>
          <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->
        <HamburgerMenu
          v-if="hamburgerMenu"
          @close-hamburger-menu="hamburgerMenu = !hamburgerMenu"
        ></HamburgerMenu>
      </transition>
      <v-app-bar elevation="1" app>
        <a
          class="pl-5 pt-1"
          style="text-decoration: none; display: flex"
          href="/"
        >
          <img src="./assets/logo.svg" />
        </a>
        <v-app-bar-nav-icon @click.stop="hamburgerMenu = !hamburgerMenu" />
      </v-app-bar>
    </div>

    <v-main :class="{ 'position-fixed': hamburgerMenu }">
      <div id="particles-js"></div>
      <router-view />
    </v-main>

    <div class="pt-2">
      <v-footer color="black" height="56px" absolute app>
        <div class="w-100">
          <p class="text-center hack">Created by inue研</p>
        </div>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import HamburgerMenu from "./components/HamburgerMenu.vue";
export default {
  name: "App",
  components: {
    HamburgerMenu,
  },
  data() {
    return {
      hamburgerMenu: false,
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

<style scoped>
.position-fixed {
  position: fixed;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-5px);
  }
}

.fade-enter-active {
  animation: fade-in 0.2s;
}

.fade-leave-active {
  animation: fade-out 0.1s;
}
</style>

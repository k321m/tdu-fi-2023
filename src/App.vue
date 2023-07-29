<template>
  <v-app>
    <div id="particles-js"></div>
    <ProgressBar v-if="checkLoading()" @end-loading="isLoading = false" />
    <template v-else>
      <div>
        <transition name="fade">
          <HamburgerMenu
            v-if="isOpenMenu"
            @close-hamburger-menu="isOpenMenu = !isOpenMenu"
          ></HamburgerMenu>
        </transition>
        <v-app-bar
          elevation="1"
          app
          :style="
            isOpenMenu ? 'background: var(--black)' : 'background: var(--white)'
          "
          :class="
            isOpenMenu ? 'fade-enter-active-bar' : 'fade-leave-active-bar'
          "
        >
          <a
            class="pl-5 pt-1"
            style="text-decoration: none; display: flex"
            href="/"
          >
            <img :src="isOpenMenu ? LogoDark : LogoLight" />
          </a>
          <div
            class="btn-menu"
            :class="{ open: isOpenMenu }"
            @click.stop="isOpenMenu = !isOpenMenu"
          >
            <span></span><span></span><span></span>
          </div>
        </v-app-bar>

        <v-main :class="{ 'position-fixed': isOpenMenu }">
          <router-view />
        </v-main>

        <div class="pt-2" v-show="!isOpenMenu">
          <v-footer color="black" height="56px" absolute app>
            <div class="w-100">
              <p class="text-center hack white small">Created by inue研</p>
            </div>
          </v-footer>
        </div>
      </div>
    </template>
  </v-app>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import HamburgerMenu from "./components/HamburgerMenu.vue";
import LogoLight from "./assets/logos/logo-light.svg";
import LogoDark from "./assets/logos/logo-dark.svg";
export default {
  name: "App",
  components: {
    HamburgerMenu,
    ProgressBar,
  },
  data() {
    return {
      isOpenMenu: false,
      test: false,
      menus: [
        { title: "トップ", icon: "mdi-web", url: "/" },
        { title: "MyNote", icon: "mdi-home", url: "/my-note" },
        { title: "研究室公開", icon: "mdi-heart", url: "/labs" },
        { title: "講義動画", icon: "mdi-information-variant", url: "" },
        {
          title: "おすすめ質問TOP10",
          icon: "mdi-information-variant",
          url: "",
        },
      ],
      LogoLight,
      LogoDark,
      isLoading: true, // 初期値としてローディング画面を表示するためのフラグ
    };
  },
  methods: {
    checkLoading() {
      console.log("checkLoading()");
      return (
        this.isLoading &&
        this.$store.getters.getPassword != "" &&
        (location.pathname == "/" || location.pathname == "/login")
      );
    },
  },
  mounted() {
    console.log("mounted()");
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

.fade-enter-active-bar {
  transition: all 0.2s;
}
.fade-leave-active-bar {
  transition: all 0.04s;
}
</style>

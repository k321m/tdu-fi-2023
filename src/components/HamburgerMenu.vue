<template>
  <div class="menu pa-5">
    <div class="header">
      <div style="margin-left: auto" @click="closeHamburgerMenu">
        <img src="../assets/close-button.svg" />
      </div>
    </div>
    <div class="pa-5">
      <div class="py-5">
        <div class="top-box">
          <router-link class="routerLink" to="/">
            <div>
              <h1 class="zen-kaku-bold">トップ</h1>
            </div>
          </router-link>

          <div class="pulldown-button px-2" @click="isOpen = !isOpen">
            <img
              :class="openAcordionStyleSet()"
              src="../assets/pulldown-button-white.svg"
            />
          </div>
        </div>
        <transition name="open">
          <div class="pt-6 pl-6" v-if="isOpen">
            <router-link class="routerLink" to="/#time-schedule">
              <h2 class="zen-kaku-medium py-2">タイムスケジュール</h2>
            </router-link>
            <router-link class="routerLink" to="/#map">
              <h2 class="zen-kaku-medium py-2">地図</h2>
            </router-link>
          </div>
        </transition>
      </div>

      <router-link class="routerLink" to="/labs">
        <div class="py-5">
          <h1 class="zen-kaku-bold">研究室公開</h1>
        </div>
      </router-link>
      <router-link class="routerLink" to="/">
        <div class="py-5">
          <h1 class="zen-kaku-bold">講義動画</h1>
        </div>
      </router-link>
      <router-link class="routerLink" to="/">
        <div class="py-5">
          <h1 class="zen-kaku-bold">具体的な質問例</h1>
        </div>
      </router-link>
      <router-link class="routerLink" to="/my-note">
        <div class="py-5">
          <h1 class="zen-kaku-bold">MyNote</h1>
        </div>
      </router-link>
      <div class="social pt-15">
        <h2 class="hack-h4">OFFICIAL SITE AND SNS:</h2>
        <div style="display: flex" class="py-5">
          <div class="pr-6">
            <img src="../assets/icon-web.svg" />
          </div>
          <div class="px-6">
            <img src="../assets/icon-facebook.svg" />
          </div>
          <div class="px-6">
            <img src="../assets/icon-twitter.svg" />
          </div>
          <div class="px-6">
            <img :src="youtube" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import youtubeIcon from "../assets/icon-you-tube.svg";
export default {
  name: "HamburgerMenu",
  emti: ["close-hamburger-menu"],
  data() {
    return {
      isOpen: false,
      youtube: youtubeIcon,
    };
  },
  methods: {
    closeHamburgerMenu() {
      console.log("入ったよ");
      this.$emit("close-hamburger-menu");
    },
    openAcordionStyleSet() {
      return {
        openAcordionbutton: this.isOpen,
        closeAcordionbutton: !this.isOpen,
      };
    },
  },
  watch: {
    $route() {
      this.closeHamburgerMenu();
    },
  },
};
</script>

<style scoped>
.menu {
  width: 100%;
  height: 100%;
  position: fixed;
  color: white;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: #010326;
}
.header {
  padding: 3% 0% 10% 0;
  display: flex;
}
h1 {
  font-size: 2.2em;
}

.routerLink {
  text-decoration: none;
  color: white;
}

.top-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pulldown-button {
  margin-left: auto;
}
@keyframes open {
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.open-enter-active {
  animation: open 0.2s;
}
.open-leave-active {
  animation: open 0.1s reverse;
}

.openAcordionbutton {
  transform: scaleY(-1);
}

.social {
  position: fixed;
  bottom: 3%;
}

.social img {
  width: 30px;
  height: 30px;
}
</style>

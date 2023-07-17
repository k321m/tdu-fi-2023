<template>
  <div class="menu pa-5" v-click-outside="onClickOutside">
    <!-- <div class="header">
      <div style="margin-left: auto" @click="closeHamburgerMenu">
        <img src="../assets/close-button.svg" />
      </div>
    </div> -->
    <div class="pa-5 scroll-contents">
      <div class="py-5">
        <div class="top-box">
          <router-link to="/" @click="closeHamburgerMenu">
            <div>
              <h2>トップ</h2>
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
          <div class="pt-6 pl-5" v-if="isOpen">
            <router-link to="/#time-schedule" @click="closeHamburgerMenu">
              <h3 class="py-2">タイムスケジュール</h3>
            </router-link>
            <router-link to="/#map" @click="closeHamburgerMenu">
              <h3 class="py-2">地図</h3>
            </router-link>
          </div>
        </transition>
      </div>

      <router-link to="/department" @click="closeHamburgerMenu">
        <div class="py-5">
          <h2>学科紹介</h2>
        </div>
      </router-link>
      <router-link to="/labs" @click="closeHamburgerMenu">
        <div class="py-5">
          <h2>研究室公開</h2>
        </div>
      </router-link>
      <router-link to="/lecture-video" @click="closeHamburgerMenu">
        <div class="py-5">
          <h2>講義動画</h2>
        </div>
      </router-link>
      <router-link to="/questions" @click="closeHamburgerMenu">
        <div class="py-5">
          <h2>おすすめ質問TOP10</h2>
        </div>
      </router-link>
      <router-link to="/faq" @click="closeHamburgerMenu">
        <div class="py-5">
          <h2>よくある質問</h2>
        </div>
      </router-link>
      <router-link to="/my-note" @click="closeHamburgerMenu">
        <div class="py-5">
          <h2>MyNote</h2>
        </div>
      </router-link>
      <div class="py-5">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeQ5ru-Mzc-gULHow6ZkxNjnRPP6I7i6aUTtTJitU7GpdYWWQ/viewform"
          style="text-decoration: none; color: white"
        >
          <h3 class="mb-4">> アンケート</h3>
        </a>
        <router-link to="/attention" @click="closeHamburgerMenu">
          <h3>> ご利用にあたって</h3>
        </router-link>
      </div>

      <div class="social py-15">
        <h3 class="hack-h3">OFFICIAL SITE AND SNS:</h3>
        <div style="display: flex" class="py-5">
          <a class="pr-4" href="https://www.dendai.ac.jp">
            <img src="../assets/icon-web.svg" />
          </a>
          <a class="px-4" href="https://www.facebook.com/TDUwebmaster/">
            <img src="../assets/icon-facebook.svg" />
          </a>
          <a class="px-4" href="https://twitter.com/TDU_webmaster">
            <img src="../assets/icon-twitter.svg" />
          </a>
          <a
            class="px-4"
            href="https://www.youtube.com/channel/UCKnPsmCuIyXioKofQa217JQ"
          >
            <img src="../assets/icon-mov.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import iconWeb from "../assets/icon-web.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
export default {
  name: "HamburgerMenu",
  emti: ["close-hamburger-menu"],
  data() {
    return {
      isOpen: false,
      web: iconWeb,
      facebook: iconFacebook,
      twitter: iconTwitter,
    };
  },
  methods: {
    closeHamburgerMenu() {
      // console.log("入ったよ");
      this.$emit("close-hamburger-menu");
    },
    openAcordionStyleSet() {
      return {
        openAcordionbutton: this.isOpen,
        closeAcordionbutton: !this.isOpen,
      };
    },
    onClickOutside() {
      this.closeHamburgerMenu();
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
  max-width: 500px;
  margin-left: auto;
  height: 100dvh;
  position: fixed;
  color: white;
  top: 64px;
  left: 0;
  right: 0;
  z-index: 2000;
  background-color: var(--black);
  margin-bottom: 64px;
  box-shadow: -1px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    -1px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    -1px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
.header {
  padding: 1em 0 1.8em 0;
  display: flex;
}

h2,
h3 {
  color: var(--white);
}
.scroll-contents {
  flex-grow: 1;
  overflow-y: scroll;
  height: 100%; /* 適切な高さを指定する */
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
.openAcordionbutton {
  transform: scaleY(-1);
}

.social img {
  width: 1.6rem;
  height: 1.6rem;
}
</style>

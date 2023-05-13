<template>
  <header class="header">
    <h1 class="header__title">Home page title</h1>
    <button
      v-show="buttonShow"
      class="menu-button"
      :class="{ open: menuOpen }"
      @click="menuOpen = !menuOpen"
    >
      <span class="menu-button__bar menu-button__bar--top"></span>
      <span class="menu-button__bar menu-button__bar--center"></span>
      <span class="menu-button__bar menu-button__bar--bottom"></span>
    </button>
    <transition name="fade">
      <nav v-show="menuOpen" class="nav" :class="{ 'sp-menu': buttonShow }">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="/" class="nav__link nav__link--current">home</a>
          </li>
          <li class="nav__item">
            <a href="/about" class="nav__link">about</a>
          </li>
          <li class="nav__item">
            <a href="/information" class="nav__link">information</a>
          </li>
          <li class="nav__item">
            <a href="/contact" class="nav__link">contact</a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {
      windowWidth: "",
      // menuOpenの真偽値はビューポート幅によるグローバルメニュー展開（v-show）と、
      // ハンバーガーメニュークリックによるグローバルメニュー展開（openクラスの付与）の両方で使用
      menuOpen: "",
      // buttonShowの真偽値はビューポート幅によるハンバーガーメニュー表示（v-show）と、
      // モバイル用のグローバルメニュー（sp-menuクラスの付与）の両方で使用
      buttonShow: "",
    };
  },
  methods: {
    getWindowWidth($event) {
      this.windowWidth = window.innerWidth;
      // 768px以上でtrue → menuを展開
      this.menuOpen = this.windowWidth >= 768;
      // 768px未満でtrue → menuボタンを表示
      this.buttonShow = this.windowWidth < 768;
    },
  },
  created() {
    // リサイズ時のイベントハンドラを登録
    window.addEventListener("resize", this.getWindowWidth);
  },
  beforeUnmount() {
    // リサイズ時のイベントハンドラを解除
    window.removeEventListener("resize", this.getWindowWidth);
  },
  mounted: function () {
    // ウィンドウ幅の初期値を設定
    this.getWindowWidth();
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  padding: 0.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  background: #0d0c15;
  color: #fefefc;
  &__title {
    margin: 0;
    padding: 0.5rem;
    font-size: 1.8rem;
  }
}

.menu-button {
  appearance: none;
  position: fixed;
  top: calc((3.8rem - 44px) / 2);
  right: 15px;
  display: inline-block;
  width: 50px;
  height: 44px;
  background: none;
  border: none;
  z-index: 10;
  cursor: pointer;
  &__bar {
    position: absolute;
    top: 0;
    left: 10%;
    display: inline-block;
    width: 80%;
    height: 4px;
    border-radius: 4px;
    background: #fefefc;
    transition: all 0.4s;
    &--top {
      top: 6px;
    }
    &--center {
      top: 20px;
    }
    &--bottom {
      top: 36px;
    }
  }
  &.open & {
    &__bar {
      &--top {
        top: 20px;
        transform: rotate(-45deg);
      }
      &--center {
        left: 50%;
        opacity: 0;
        transform: rotate(135deg);
      }
      &--bottom {
        top: 20px;
        transform: rotate(45deg);
      }
    }
  }
}

.nav {
  &__list {
    display: flex;
    gap: 1rem;
    list-style: none;
    text-transform: uppercase;
  }
  &.sp-menu {
    position: fixed;
    top: 0;
    right: 0;
    padding: 50px;
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    background: #3c3946;
  }
  &.sp-menu & {
    &__list {
      display: flex;
      flex-direction: column;
      & > * + * {
        margin-top: 1rem;
      }
    }
  }
  &__link {
    position: relative;
    color: inherit;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }
  &__link--current {
    pointer-events: none;
    &::after {
      content: "";
      position: absolute;
      top: calc(50% - 2px);
      left: 0;
      width: 100%;
      height: 2px;
      background: currentColor;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
</style>

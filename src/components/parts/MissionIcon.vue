<template>
  <a :class="className">
    <div class="balloon">
      <div class="balloon-contents">
        <img src="../../assets/mission-speech-bubble.png" />
        <div class="status-of-achievement vdl-logo">
          <p
            style="
              font-size: 1.02rem;
              color: var(--white);
              transform: translate(-50%, -50%);
              white-space: nowrap;
            "
          >
            0<span style="font-size: 0.5rem">/4</span>
          </p>
        </div>
      </div>
    </div>
    <img src="../../assets/mission-3d-icon.png" class="fixed-icon-img" />
  </a>
</template>

<script>
export default {
  name: "MissionIcon",
  props: {
    className: String,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.balloon-contents {
  position: relative;
  width: 2.8em;
  height: 2.8em;
}
.balloon-contents > img {
  width: 100%;
  height: auto;
}
.status-of-achievement {
  position: absolute;
  top: 54%;
  left: 52%;
  display: flex;
}
.menu-round .balloon > * {
  opacity: 0;
}
.menu-round.toggle .balloon > * {
  opacity: 1;
}

.menu-round.toggle .balloon {
  position: absolute;
  top: -1em;
  right: -1.5em;
  opacity: 0;
  display: flex;
  justify-content: center;
  animation: balloon-animation-a03a0136 0.5s cubic-bezier(0.12, 0, 0.39, 0) 0.6s
    1 forwards;
  line-height: 1rem;
  align-items: center;
}

@keyframes balloon-animation {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
  }
  65% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
  20%,
  100% {
    opacity: 1;
  }
}
</style>

<template>
  <router-link to="/my-note">
    <div class="balloon vdl-logo">
      <!-- <b style="font-size: 0.4rem">達成</b> -->
      <p class="denominator" style="color: var(--white)">0</p>
      <p class="numerator" style="color: var(--white); font-size: 0.5rem">
        <sub>/4</sub>
      </p>
    </div>
    <img src="../../assets/mission-3d-icon.png" class="fixed-icon-img" />
  </router-link>
</template>

<script>
export default {
  name: "MissionIcon",
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.denominator {
  position: relative;
  padding-right: 0.85rem;
  padding-bottom: 0.2rem;
  font-size: 1.05rem;
}
.numerator {
  position: absolute;
  top: 0.9rem;
  right: 0.3rem;
}
.menu-round .balloon > * {
  opacity: 0;
  transition: 0.2s;
}
.menu-round.open .balloon > *,
.menu-round.open .balloon::before {
  opacity: 1;
}
.menu-round.open .balloon {
  position: absolute;
  top: -0.8em;
  right: -1.6em;
  width: 2.8em;
  height: 2.8em;
  border-radius: 50%;
  color: #ffffff;
  font-size: 14px;
  background-color: #fa00ff;
  opacity: 0;
  display: flex;
  /* flex-direction: column; */
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

.balloon::before {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  left: -5px;
  bottom: 0px;
  border-right: 20px solid #fa00ff;
  border-top: 16px solid transparent;
  border-bottom: 8px solid transparent;
  transform: rotate(327deg);
  z-index: -1;
  opacity: 0;
}
.menu-round .balloon::before {
  opacity: 0;
}
</style>

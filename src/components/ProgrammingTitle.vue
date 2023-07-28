<template>
  <div class="py-2" :class="setStyle()">
    <h2 class="hack">
      <span><slot name="questionNo"></slot></span><slot name="name"></slot>
      <slot />
      <img
        src="/src/assets/fire-numbg.svg"
        style="position: absolute; top: 0; left: 0; height: 100%; width: auto"
      />
    </h2>
  </div>
</template>
<script>
export default {
  name: "ProgrammingTitle",
  props: {
    question1: {
      type: Boolean,
      default: false,
    },
    question2: {
      type: Boolean,
      default: false,
    },
    question3: {
      type: Boolean,
      default: false,
    },
    question4: {
      type: Boolean,
      default: false,
    },
    question5: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setStyle() {
      return {
        "question1-title": this.question1,
        "question2-title": this.question2,
        "question3-title": this.question3,
        "question4-title": this.question4,
        "question5-title": this.question5,
      };
    },
  },
};
</script>

<style scoped>
h2 {
  position: relative;
  overflow: hidden;
  height: 3.8rem;
  padding: 0.7rem 2rem 0.7rem 5.5rem;
  line-height: 3rem;
}

h2:before {
  position: absolute;
  top: -150%;
  left: -5.5rem;
  width: 10rem;
  height: 300%;
  content: "";
  -webkit-transform: rotate(25deg);
  transform: rotate(20deg);
}

h2 span {
  font-size: 2rem;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: block;
  padding-top: 0.4rem;
  padding-left: 0.8rem;
  color: var(--white);
}

.question1-title h2 {
  border-top: 3px solid var(--pink);
}
.question1-title h2:before {
  background: var(--pink);
}
.question2-title h2 {
  border-top: 3px solid #ba37ca;
}
.question2-title h2:before {
  background: #ba37ca;
}
.question3-title h2 {
  border-top: 3px solid #8f29ae;
}
.question3-title h2:before {
  background: #8f29ae;
}
.question4-title h2 {
  border-top: 3px solid #661b93;
}
.question4-title h2:before {
  background: #661b93;
}
.question5-title h2 {
  border-top: 3px solid var(--purple);
}
.question5-title h2:before {
  background: var(--purple);
}
</style>

<template>
  <div class="pass-page">
    <div class="pass-contents">
      <div class="py-2">
        <input type="password" v-model="pass" placeholder="パスワードを入力" />
      </div>
      <div class="py-2">
        <div class="default-btn btn-animation" @click="click">
          <p class="zen-kaku-bold" style="font-size: 1rem">送信</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "../components/TopTitle.vue";
export default {
  name: "LoginView",
  components: {
    TopTitle,
  },
  data() {
    return {
      pass: "",
    };
  },
  methods: {
    click() {
      console.log(this.pass);
      this.$store.commit("savePassword", this.pass);
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style scoped>
.pass-page {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 5000;
  background-color: white;
  justify-content: center;
  align-items: center;
}
.pass-contents {
  width: 90%;
  max-width: 520px;
}

input {
  width: 100%;
  min-height: 55px;
  padding: 0.8em;
  border: 1px solid #acaaf2;
  background-color: transparent;
  color: #010440;
  font-size: 1rem;
  line-height: 1.5;
}
::placeholder {
  color: #acaaf2;
}
input:focus {
  border: 1px solid #010440;
  background-color: white;
  outline: none;
}
</style>

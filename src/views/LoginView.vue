<template>
  <div class="pass-page">
    <div class="pass-contents">
      <div class="py-1">
        <input
          type="password"
          class="text-box"
          v-model="pass"
          placeholder="パスワードを入力"
        />
      </div>
      <p class="zen-kaku-bold alert" v-show="updateMiss">
        パスワードが違います
      </p>
      <div class="py-3">
        <div :class="changeStyle()" class="btn-animation" @click="send">
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
      miss: false,
    };
  },
  methods: {
    // passをVuexのtmpPasswordに保存して"/"にアクセス
    send() {
      if (this.pass) {
        this.$store.state.tmpPassword = this.pass;
        this.$router.push({ name: "index" });
      }
    },
    // 何も入力されていない時は送信できなそうなスタイルに変更
    changeStyle() {
      return {
        disable: !this.pass,
        able: this.pass,
      };
    },
  },
  computed: {
    // VueRouterのrouter.js内でmissedPasswordが変更されたら発火
    updateMiss() {
      return this.$store.getters.getMissedPassword;
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
.alert {
  color: red;
}

.disable {
  min-height: 48px;
  padding: 1.1rem;
  background-color: #bab8f1;
  color: white;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.able {
  min-height: 48px;
  padding: 1.1rem;
  background-color: #010440;
  color: white;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}
</style>

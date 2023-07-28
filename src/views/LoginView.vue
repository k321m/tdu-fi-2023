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
      <p class="sub-strong pink" v-show="updateMiss">パスワードが違います</p>
      <div class="py-3">
        <Button
          :default="inputHasValue"
          :desable="!inputHasValue"
          @click="send"
        >
          送信
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "../components/TopTitle.vue";
import Button from "../components/parts/Button.vue";
export default {
  name: "LoginView",
  components: {
    TopTitle,
    Button,
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
  },
  computed: {
    // VueRouterのrouter.js内でmissedPasswordが変更されたら発火
    updateMiss() {
      return this.$store.getters.getMissedPassword;
    },
    // 空文字列ならfalse、何かしらの値が入力されていればtrueを返すcomputedプロパティ
    inputHasValue() {
      return this.pass !== "";
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

input:focus {
  border: 1px solid #010440;
  background-color: var(--white);
  outline: none;
}
</style>

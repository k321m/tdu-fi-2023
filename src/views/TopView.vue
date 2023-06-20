<template>
  <div id="contents">
    <Button myNote>MyNoteボタン</Button>
    <Button default>デフォルトボタン</Button>
    <Button defaultBorder>デフォルトボーダーボタン</Button>
    <Button pink>ピンクボタン</Button>
    <Button pinkBorder>ピンクボーダーボタン</Button>

    <h1>h1のサイズです。</h1>
    <h2>h2のサイズです。</h2>
    <h3>h3のサイズです。</h3>
    <h4>h4のサイズです。</h4>
    <h5>h5のサイズです。</h5>
    <h6>h6のサイズです。</h6>
    <p>
      pはこんな感じpはこんな感じpはこんな感じpはこんな感じpはこんな感じpはこんな感じpはこんな感じ
    </p>
    <ul>
      <li>リストはこんな感じ</li>
      <li>リストはこんな感じ</li>
      <li>リストはこんな感じ</li>
    </ul>
    <TopTitle />
    <TopCarousel />
    <TimeSchedule @open-map="openMap" />
    <Map ref="mapRef" />
    <MyNoteIcon />
  </div>
</template>

<script>
import Button from "../components/parts/Button.vue";
import MyNoteIcon from "../components/MyNoteIcon.vue";
import TimeSchedule from "../components/TimeSchedule.vue";
import TopCarousel from "../components/TopCarousel.vue";
import TopTitle from "../components/TopTitle.vue";
import Map from "../components/Map.vue";
import "../js/particles/top-particle";
export default {
  name: "Top",
  components: {
    TopCarousel,
    TimeSchedule,
    MyNoteIcon,
    TopTitle,
    Map,
    Button,
  },
  methods: {
    openMap(key) {
      this.$refs.mapRef.openViewDialogByKey(key);
    },
  },
};
</script>

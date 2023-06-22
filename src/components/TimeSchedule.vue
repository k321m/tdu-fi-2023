<template>
  <div class="py-8">
    <TimeScheduleDialog
      :view="isDialogVisible"
      @update:view="isDialogVisible = $event"
      :eventData="clickedEventData"
      :eventKey="clickedEventKey"
      :eventTime="clickedEventTime"
      @open-map="openMap"
    ></TimeScheduleDialog>

    <div id="time-schedule" style="padding-top: 72px; margin-top: -72px"></div>
    <div class="background">
      <div class="time-schedule">
        <div class="py-4 pl-4">
          <h4 class="pl-5 pb-2">タイムスケジュール</h4>
          <VueTyper
            class="pl-1 hack-h1"
            text=">Time Schedule"
            :type-delay="55"
            :repeat="0"
          >
          </VueTyper>
        </div>
        <div class="py-4">
          <h4 class="pl-4 pb-3">終日開催</h4>
          <div class="pl-4">
            <Carousel :itemsToShow="3.2" snapAlign="start" :transition="1500">
              <Slide v-for="(value, key) in this.allDayEventsData" :key="value">
                <div
                  class="carousel__item"
                  :style="value.img"
                  @click="openDialog(value, key)"
                >
                  <div></div>
                  <p :style="value.fontsize" class="white">
                    {{ value.title }}
                  </p>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="py-4" id="timeline">
          <h4 class="pl-4 pb-3">限定プログラム</h4>
          <v-row class="pl-4">
            <v-col cols="2">
              <v-timeline line-color="black" side="end">
                <v-timeline-item height="100px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">10:00</span>
                  </template>
                </v-timeline-item>
                <template v-for="time in timesData" :key="time">
                  <v-timeline-item height="32px" size="xx-small">
                    <template v-slot:opposite>
                      <span class="hack-h5">{{ time }}</span>
                    </template>
                  </v-timeline-item>
                </template>

                <v-timeline-item height="132px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack-h5">16:00</span>
                  </template>
                </v-timeline-item>
              </v-timeline>
            </v-col>
            <v-col class="pt-15 pl-5">
              <div>
                <p>入場開始</p>
              </div>
              <div style="padding-top: 92px">
                <template
                  v-for="timeSchedule in this.timeScheduleData"
                  :key="timeSchedule"
                >
                  <div style="padding-bottom: 53px">
                    <Carousel
                      :itemsToShow="2.4"
                      snapAlign="start"
                      :transition="1500"
                    >
                      <Slide v-for="(value, key) in timeSchedule" :key="value">
                        <div
                          class="carousel__item"
                          @click="
                            openDialog(
                              this.limitedEventsData[value.eventDetailKey],
                              key,
                              value.time
                            )
                          "
                          :style="[
                            this.limitedEventsData[value.eventDetailKey]
                              .carousel_height,
                            this.limitedEventsData[value.eventDetailKey]
                              .img_height,
                            this.limitedEventsData[value.eventDetailKey].img,
                          ]"
                        >
                          <div>
                            <p
                              style="font-size: 0.6em; text-align: center"
                              :style="
                                this.limitedEventsData[value.eventDetailKey]
                                  .subTitleStyle
                              "
                              v-if="
                                this.limitedEventsData[value.eventDetailKey]
                                  .subTitle
                              "
                            >
                              {{
                                this.limitedEventsData[value.eventDetailKey]
                                  .subTitle
                              }}
                            </p>
                            <p
                              style="font-size: 0.9em; text-align: center"
                              class="white"
                            >
                              {{
                                this.limitedEventsData[value.eventDetailKey]
                                  .title
                              }}
                            </p>
                          </div>
                        </div>
                      </Slide>
                    </Carousel>
                  </div>
                </template>
              </div>
              <div class="">
                <p>オープンキャンパス終了</p>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TimeScheduleDialog from "./TimeScheduleDialog.vue";
import TimeScheduleDialog from "./templates/TimeScheduleDialog.vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "TimeTable",
  emits: ["open-map"],
  data() {
    return {
      isDialogVisible: false,
      allDayEventsData: {},
      limitedEventsData: {},
      timeScheduleData: {},
      timesData: [
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
      ],
      clickedEventData: Array,
      clickedEventKey: String,
      clickedEventTime: String,
    };
  },
  components: {
    TimeScheduleDialog,
    Carousel,
    Slide,
  },
  methods: {
    openDialog(value, key, time = null) {
      this.isDialogVisible = true;
      this.clickedEventData = value;
      this.clickedEventKey = key;
      this.clickedEventTime = time;
    },
    openMap(key) {
      // console.log(key);
      this.$emit("open-map", key);
    },
  },
  mounted() {
    this.allDayEventsData = this.$store.getters["eventsStore/getAllDayEvents"];
    this.limitedEventsData =
      this.$store.getters["eventsStore/getLimitedEvents"];
    this.timeScheduleData = this.$store.getters["eventsStore/getTimeSchedule"];
  },
};
</script>

<style scoped>
.background {
  overflow: visible;
  background-color: white;
  z-index: -1; /*描画を一番下に*/
  width: calc(100% - 1.4em);
  border-radius: 0 0.8rem 0.8rem 0;
}
.time-schedule {
  width: 100vw;
}

.carousel__slide {
  margin: 3px;
}

.hack-h1 {
  font-size: 2em;
}
p {
  font-weight: var(--medium);
}
.carousel__item {
  background-size: cover;
  background-position: center center;
  min-height: 52px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  /* border-radius: 3px; */
}

.carousel__slide {
  margin: 0 0.1em;
}

#timeline .carousel__slide {
  align-items: baseline;
}
</style>

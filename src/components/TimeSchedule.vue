<template>
  <div class="py-8">
    <v-dialog v-model="isDialogVisible">
      <TimeScheduleDialog
        :eventData="clickedEventData"
        :eventKey="clickedEventKey"
        :eventTime="clickedEventTime"
        @close-dialog="isDialogVisible = false"
      />
    </v-dialog>

    <div id="time-schedule" class="background">
      <div class="time-schedule">
        <div class="py-4 pl-4">
          <p class="zen-kaku-bold pl-5 pb-2">タイムスケジュール</p>
          <VueTyper
            class="pl-1 hack-h2"
            text=">Time Schedule"
            type-delay="55"
            :repeat="0"
          >
          </VueTyper>
        </div>
        <div class="py-4">
          <p class="zen-kaku-bold pl-4 pb-3">終日開催</p>
          <div class="pl-4">
            <Carousel :itemsToShow="3.2" snapAlign="start" :transition="1500">
              <Slide v-for="(value, key) in this.allDayEventsData" :key="value">
                <div
                  class="carousel__item"
                  :style="value.img"
                  @click="openDialog(value, key)"
                >
                  <span class="zen-kaku-medium" :style="value.fontsize">
                    {{ value.title }}
                  </span>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="py-4" id="timeline">
          <p class="zen-kaku-bold pl-4 pb-3">限定プログラム</p>
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
                <p class="zen-kaku-h5">入場開始</p>
              </div>
              <div style="padding-top: 92px">
                <template
                  v-for="timeSchedule in this.timeScheduleData"
                  :key="timeSchedule"
                >
                  <div style="padding-bottom: 46px">
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
                              class="zen-kaku-medium"
                              style="font-size: 0.6em"
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
                            <p class="zen-kaku-medium" style="font-size: 0.9em">
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
                <p class="zen-kaku-h5">オープンキャンパス終了</p>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeScheduleDialog from "./TimeScheduleDialog.vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "TimeTable",
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
  width: calc(100% - 24px);
  border-radius: 0px 30px 30px 0px;
}
.time-schedule {
  width: 100vw;
}

.carousel__item {
  min-height: 52px;
  width: 100%;
  background-color: gainsboro;
  color: white;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;

  background-size: 144px;
  background-position: center center;
}

.carousel__slide {
  margin: 3px;
}

#timeline .carousel__slide {
  align-items: baseline;
}
</style>

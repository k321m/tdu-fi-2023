<template>
  <div class="py-8">
    <TimeScheduleDialog
      :view="isDialogVisible"
      @update:view="isDialogVisible = $event"
      :eventData="clickedEventData"
      :eventKey="clickedEventKey"
      :eventTime="clickedEventTime"
      @open-map="openMap"
    />

    <div id="time-schedule" style="padding-top: 72px; margin-top: -72px"></div>
    <div>
      <div class="time-schedule py-4">
        <div class="v-container">
          <div class="py-4">
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
            <h4 class="pb-3">終日開催</h4>
            <!-- <div class=""> -->
            <Carousel
              id="all-day-event"
              :itemsToShow="1.2"
              :breakpoints="breakpoints_allDay"
              snapAlign="start"
              :transition="500"
            >
              <Slide v-for="(value, key) in this.allDayEventsData" :key="value">
                <div
                  class="carousel__item"
                  :style="value.img"
                  @click="openDialog(value, key)"
                >
                  <!-- <div></div> -->
                  <p :style="value.fontsize" class="white">
                    <b>{{ value.title }}</b>
                  </p>
                </div>
              </Slide>
            </Carousel>
            <!-- </div> -->
          </div>
          <div class="py-4" id="timeline">
            <h4 class="pb-3">限定プログラム</h4>
            <div style="display: flex">
              <v-timeline line-color="black" side="end">
                <v-timeline-item height="100px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack"><b>10:00</b></span>
                  </template>
                </v-timeline-item>
                <template v-for="time in timesData" :key="time">
                  <v-timeline-item height="32px" size="xx-small">
                    <template v-slot:opposite>
                      <span class="hack"
                        ><b>{{ time }}</b></span
                      >
                    </template>
                  </v-timeline-item>
                </template>

                <v-timeline-item height="132px" size="xx-small">
                  <template v-slot:opposite>
                    <span class="hack"><b>16:00</b></span>
                  </template>
                </v-timeline-item>
              </v-timeline>
              <div class="timeline-item pt-13 pl-1">
                <p>入場開始</p>
                <div style="padding-top: 94px">
                  <template
                    v-for="(timeSchedule, key) in this.timeScheduleData"
                    :key="timeSchedule"
                  >
                    <div
                      :style="
                        key != lastTimeScheduleKey ? 'margin-bottom:48px' : ''
                      "
                    >
                      <Carousel
                        id="limited-event"
                        :itemsToShow="1"
                        :breakpoints="breakpoints_limited"
                        snapAlign="center"
                        :transition="500"
                      >
                        <Slide
                          v-for="(value, key) in timeSchedule"
                          :key="value"
                          :class="{
                            'long-event':
                              this.limitedEventsData[value.eventDetailKey]
                                .carousel_height,
                          }"
                        >
                          <div
                            class="carousel__item"
                            @click="
                              openDialog(
                                this.limitedEventsData[value.eventDetailKey],
                                key,
                                value.time
                              )
                            "
                            :style="
                              this.limitedEventsData[value.eventDetailKey].img
                            "
                          >
                            <div>
                              <p
                                class="white"
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
                                <b>{{
                                  this.limitedEventsData[value.eventDetailKey]
                                    .subTitle
                                }}</b>
                              </p>
                              <p
                                style="font-size: 0.9em; text-align: center"
                                class="white"
                              >
                                <b>{{
                                  this.limitedEventsData[value.eventDetailKey]
                                    .title
                                }}</b>
                              </p>
                            </div>
                          </div>
                        </Slide>
                      </Carousel>
                    </div>
                  </template>
                </div>
                <p style="padding-top: 48px">オープンキャンパス終了</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeScheduleDialog from "./templates/TimeScheduleDialog.vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "TimeTable",
  emits: ["open-map"],
  data() {
    return {
      breakpoints_allDay: {
        280: {
          itemsToShow: 1.2,
        },
        300: {
          itemsToShow: 2.0,
        },
        400: {
          itemsToShow: 2.4,
        },
        580: {
          itemsToShow: 3.4,
        },
        720: {
          itemsToShow: 4.4,
        },
        1000: {
          itemsToShow: 7,
        },
      },
      breakpoints_limited: {
        280: {
          itemsToShow: 1,
        },
        300: {
          itemsToShow: 1.6,
        },
        400: {
          itemsToShow: 2.0,
        },
        540: {
          itemsToShow: 3.2,
        },
        700: {
          itemsToShow: 4.4,
        },
        1000: {
          itemsToShow: 7,
        },
      },
      isDialogVisible: false,
      allDayEventsData: {},
      limitedEventsData: {},
      timeScheduleData: {},
      lastTimeScheduleKey: String,
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
    // isLastTSData() {
    //   return true;
    // },
  },
  mounted() {
    this.allDayEventsData = this.$store.getters["eventsStore/getAllDayEvents"];
    this.limitedEventsData =
      this.$store.getters["eventsStore/getLimitedEvents"];
    this.timeScheduleData = this.$store.getters["eventsStore/getTimeSchedule"];
    let keys_array = Object.keys(this.timeScheduleData);
    this.lastTimeScheduleKey = keys_array.pop();
  },
};
</script>

<style scoped>
.time-schedule {
  position: relative;
}
.carousel__slide {
  margin-right: 0.2em;
  height: 3.4em;
}
.long-event.carousel__slide {
  margin-right: 0.2em;
  height: 4em;
}

.hack-h1 {
  font-size: 2em;
}
p {
  font-weight: var(--medium);
}
.carousel__item {
  z-index: -1;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* vertical-align: top; */
  border-radius: 0.2rem;
}

.carousel__item::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    181deg,
    rgba(36, 7, 77, 0.6),
    rgba(23, 4, 48, 0.63) 68%,
    rgba(0, 0, 0, 0.68)
  );
  border-radius: 0.2rem;
}

.v-row {
  flex-wrap: nowrap;
}

.timeline-item {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: nowrap;
}
/* .carousel__slide {
  margin: 0 0.1em;
}

#timeline .carousel__slide {
  align-items: baseline;
} */
</style>

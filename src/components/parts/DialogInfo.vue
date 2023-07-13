<template>
  <div>
    <img :src="setIcon()" class="pr-1" />
    <p class="flex-end">
      <slot name="item" />
      <span class="pl-1" style="font-size: 0.8em">
        <slot name="small-item" />
      </span>
      <slot />
    </p>
  </div>
</template>
<script>
import ClockIcon from "/src/assets/icon-clock.svg";
import MapIcon from "/src/assets/icon-map.svg";
import PeopleIcon from "/src/assets/icon-people.svg";
import PersonIcon from "/src/assets/icon-person.svg";
export default {
  name: "DialogInfo",
  props: {
    clockIcon: {
      type: Boolean,
      default: false,
    },
    mapIcon: {
      type: Boolean,
      default: false,
    },
    peopleIcon: {
      type: Boolean,
      default: false,
    },
    personIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icon: Object,
    };
  },
  methods: {
    setIcon() {
      if (this.clockIcon) {
        this.icon = ClockIcon;
      } else if (this.mapIcon) {
        this.icon = MapIcon;
      } else if (this.peopleIcon) {
        this.icon = PeopleIcon;
      } else if (this.personIcon) {
        this.icon = PersonIcon;
      } else {
        this.icon = ClockIcon;
      }
      return this.icon;
    },
  },
};
</script>

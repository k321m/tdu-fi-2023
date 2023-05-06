<template>
  <v-app>
    <v-app-bar :elevation="0">
      <v-toolbar-title class="hack-h4">OC2023 TDU FI</v-toolbar-title>
      <v-app-bar-nav-icon
        v-on:click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "HeaderNavBar",
};
</script>

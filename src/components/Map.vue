<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable */
import gmaps from "../config/gmaps";
import setUserPos from "../config/setUserPos";

export default {
  name: "Map",
  data() {
    return {};
  },
  created() {
    gmaps().then(() => {
      setUserPos(google);
    });
  }
};
</script>

<style scoped>
#map {
  height: calc(100vh - 70px);
}
</style>

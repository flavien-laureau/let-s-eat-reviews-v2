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

      // var marker = new google.maps.Marker({ position: userPos, map: map });

      /* google.maps.event.addListener(map, "dragend", function() {
      alert("map dragged");
    }); */
      // console.log(new google.maps.Geocoder());
    });
  }
};
</script>

<style scoped>
#map {
  height: calc(100vh - 70px);
}
</style>

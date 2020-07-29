<template>
  <div id="app">
    <b-container fluid>
      <b-row><HeaderApp /></b-row>
      <b-row cols="1" cols-lg="2">
        <b-col class="p-0"><Map /></b-col>
        <b-col class="p-0"><List /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import List from "./components/List.vue";
import HeaderApp from "./components/HeaderApp.vue";

export default {
  name: "App",
  components: {
    Map,
    List,
    HeaderApp
  }
};
</script>

<style></style>

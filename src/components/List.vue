<template>
  <section id="list">
    <div v-for="(restau, index) in filterRestau" :key="index" class="restau">
      <a class="more">Voir les avis</a>
      <div class="img-wrapper">
        <img class="img-restau" :src="restau.img" />
      </div>
      <h2 class="name">{{ restau.name }}</h2>
      <hr class="hr" />
      <p class="address">{{ restau.vicinity }}</p>
      <div class="rating">
        <img class="star" src="../ressources/img/star-solid.svg" />
        <p>{{ restau.rating }}/5</p>
      </div>
    </div>
  </section>
</template>

<script>
import listStyle from "../ressources/js/listStyle";

export default {
  name: "List",
  data() {
    return {};
  },
  updated() {
    listStyle();
  },
  computed: {
    filterRestau() {
      return this.$store.state.restaurants;
    }
  }
};
</script>

<style scoped>
.star {
  width: 25px;
}
#list {
  background-color: #818884;
  height: calc(100vh - 70px);
  padding-top: 30px;
  overflow: scroll;
  border-left: black 2px solid;
}

.restau {
  transition: all 0.4s;
  position: relative;
  padding-left: 220px;
  padding-right: 75px;
  height: 150px;
  margin: 0 30px 30px;
  background-color: #c3d9b8;
  border-radius: 150px;
  cursor: pointer;
}

.img-wrapper {
  position: absolute;
  top: -10px;
  left: -10px;
  border-radius: 100px;
  background-color: #f0eed7;
  padding: 10px;
  z-index: 1000;
  transition: all 0.2s;
}
.img-restau {
  border-radius: 100px;
  transition: all 0.2s;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.name {
  height: 37px;
  line-height: 47px;
  font-size: 24px;
  color: black;
  transition: all 0.4s;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hr {
  border: 1px solid #fafafa;
}

.address,
.rating {
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rating {
  display: flex;
}
.rating p {
  margin: 0 0 0 7px;
}

.more {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  line-height: 150px;
  text-align: center;
  width: 100%;
  background-color: #c3d9b8;
  font-size: 48px;
  font-style: italic;
  opacity: 0;
  color: #333 !important;
  transition: all 0.4s;
  text-decoration: none !important;
  border-radius: 150px;
  font-family: "Pacifico";
  text-shadow: 0 1px 1px #222;
}
@media screen and (max-width: 1199px) {
  #list {
    border-left: none;
  }
}

@media screen and (max-width: 576px) {
  .restau {
    margin: 0 0 30px;
    padding-left: 150px;
    padding-right: 30px;
    border-radius: 0;
  }

  .more {
    font-size: 35px;
    border-radius: 0;
  }
  .img-restau {
    border-radius: 0;
    width: 130px;
    height: 130px;
  }
  .img-wrapper {
    top: 0px;
    border-radius: 0;
  }
}
</style>

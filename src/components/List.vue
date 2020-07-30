<template>
  <section id="list">
    <div v-for="(restau, index) in restaurants" :key="index" class="restau">
      <a class="more">Voir les avis</a>
      <div class="img-wrapper">
        <img class="img-restau" src="../ressources/img/image-test.jpg" />
      </div>
      <h2 class="name">{{ restau.name }}</h2>
      <hr class="hr" />
      <p class="address">{{ restau.vicinity }}</p>
      <p class="rating">{{ restau.rating }}/5</p>
    </div>
  </section>
</template>

<script>
import listStyle from "../ressources/js/listStyle";

export default {
  name: "List",
  data() {
    return {
      restaurants: [
        { name: "restau1", vicinity: "blablablablablablablabla", rating: 4 },
        { name: "restau2", vicinity: "blablaaa", rating: 2 },
        { name: "restau3", vicinity: "blabla 3eme", rating: 5 },
        {
          name: "restau4restau4restau4 restau4",
          vicinity: "blabla",
          rating: 4
        },
        { name: "restau5", vicinity: "blablaaaaa", rating: 2 },
        { name: "restau6", vicinity: "blabla 6eme", rating: 5 }
      ]
    };
  },
  mounted() {
    listStyle();
  }
};
</script>

<style scoped>
#list {
  background-color: darkgray;
  height: calc(100vh - 64px);
  padding-top: 30px;
  overflow: scroll;
}

.restau {
  transition: all 0.4s;
  position: relative;
  padding-left: 220px;
  padding-right: 75px;
  height: 150px;
  margin: 0 30px 30px;
  background-color: #e96b55;
  border-radius: 150px;
  cursor: pointer;
}

.img-wrapper {
  position: absolute;
  top: -10px;
  left: -10px;
  border-radius: 100px;
  background-color: #fafafa;
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
  color: #333;
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
  color: #fafafa;
  overflow: hidden;
  text-overflow: ellipsis;
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
  background-color: #e96b55;
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

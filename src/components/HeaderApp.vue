<template>
  <header>
    <b-container fluid>
      <b-row cols="1" cols-lg="3" class="pt-2">
        <b-col class="my-auto"><h1>Let's eat reviews V2</h1></b-col>
        <b-col class="my-auto">
          <b-button class="mb-2 mr-2" variant="primary">
            Ajouter un restaurant
          </b-button>
          <b-button class="mb-2 ml-2" variant="primary" @click.prevent="search">
            Rechercher
          </b-button>
        </b-col>
        <b-col class="my-auto">
          <b-form>
            <b-row cols="1" cols-sm="3" class="pt-2">
              <b-col id="form-label">
                <p class="m-0">
                  Affiner la recherche:
                </p>
              </b-col>
              <b-col class="select">
                <b-form-group>
                  <b-form-select v-model="form.filterMin" :options="filterMin">
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col class="select">
                <b-form-group>
                  <b-form-select v-model="form.filterMax" :options="filterMax">
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import nearbySearch from "../config/nearbySearch";

export default {
  data() {
    return {
      form: {
        filterMin: 1,
        filterMax: 5
      },
      filterMin: [1, 2, 3, 4, 5],
      filterMax: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    search() {
      nearbySearch();
    }
  }
};
</script>

<style scoped>
header {
  background-color: #4f5b62;
  color: white;
  width: 100%;
}
#form-label {
  max-width: 175px;
}
.select {
  max-width: 135px;
}
</style>

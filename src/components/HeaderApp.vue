<template>
  <header>
    <b-container fluid>
      <b-row cols="1" cols-lg="3" class="pt-2">
        <b-col class="my-auto"><h1>Let's eat reviews V2</h1></b-col>
        <b-col class="my-auto">
          <b-button class="mb-2" variant="primary"
            >Ajouter un restaurant</b-button
          >
        </b-col>
        <b-col class="my-auto">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-row cols="1" cols-sm="4">
              <b-col
                ><p class="m-0">
                  Affiner la recherche:
                </p></b-col
              >
              <b-col
                ><b-form-group>
                  <b-form-select
                    v-model="form.filterMin"
                    :options="filterMin"
                  ></b-form-select> </b-form-group
              ></b-col>
              <b-col
                ><b-form-group>
                  <b-form-select
                    v-model="form.filterMax"
                    :options="filterMax"
                  ></b-form-select> </b-form-group
              ></b-col>
              <b-col class="mb-2"
                ><b-button type="submit" variant="primary"
                  >Submit</b-button
                ></b-col
              >
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
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
  }
};
</script>

<style scoped>
header {
  background-color: #333333;
  color: white;
  width: 100%;
}
</style>

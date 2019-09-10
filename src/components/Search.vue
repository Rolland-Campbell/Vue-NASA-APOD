<template>
  <div class="search">
    <form @submit.prevent="getPicture">
      <div class="input-group mb-3">
        <div class="input-group-prepend" id="button-addon3">
          <button class="btn btn-outline-secondary" type="submit">Search</button>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="enter a date, format YYYY-MM-DD"
          v-model="searchQuery"
        />
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "search",
  data() {
    return {
      searchQuery: "" //this gets the form data
    };
  },
  mounted() {
    //NOTE This goes and gets the current date and sets it as default. It includes the picture.
    let date = new Date();
    let month = date.getMonth() + 1;
    let query = date.getFullYear() + "-" + month + "-" + date.getDate();
    this.$store.dispatch("getPicture", query);
  },
  computed: {},
  methods: {
    getPicture() {
      //go get the picture from the user asked for
      this.$store.dispatch("getPicture", this.searchQuery);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
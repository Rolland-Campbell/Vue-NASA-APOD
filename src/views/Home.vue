<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            NASA APOD
            <img alt="Vue logo" src="../assets/logo.png" />iewer
          </h1>
        </div>
      </div>
      <hr />
      <Search />
      <hr />
      <Picture />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//NOTE you need to import you components.
import Search from "@/components/Search.vue";
import Picture from "@/components/Picture.vue";

export default {
  name: "home",
  components: {
    //NOTE bring in the imports
    Search,
    Picture
  }
};
</script>

<style scoped>
img {
  height: 50px;
}
</style>

<template>
  <div class="picture">
    <div class="row">
      <div class="col">
        <h3>{{picture.title}}</h3>
        <img :src="picture.hdurl" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "picture",
  props: ["pictureProp"],
  data() {
    return {};
  },
  computed: {
    picture() {
      return this.$store.state.picture;
    }
  },
  methods: {
    selectPicture() {
      this.$store.dispatch("selectPicture", this.pictureProp);
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 600px;
}
</style>
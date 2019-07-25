<template>
  <main>
    <div v-for="pic in flickrPhotos" :key="pic.id" class="photo-box">
      <img :src="pic.url_m" :alt="pic.title" />

      <h3>{{pic.title}}</h3>
    </div>
  </main>
</template>

<script>
import Header from "~/components/Header";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["flickrPhotos.photo"])
  },
  mounted() {
    this.$store.dispatch("getFlickrPhotos");
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 90%;
  height: calc(100vh - 100px);
  margin: 0 auto;
  display: flex;
  flex-flow: wrap row;

  .photo-box {
    width: 33.33%;
    height: 350px;
    margin: 20px;

    img {
      height: 100%;
      width: 100%;
      background-size: cover;
    }
  }
}
</style>
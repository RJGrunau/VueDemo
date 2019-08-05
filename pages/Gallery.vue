<template>
  <main>
    <PhotoBox v-for="pic in flickrPhotos" :key="pic.id" :pic="pic" />
    <!-- <div v-for="pic in flickrPhotos" :key="pic.id" class="photo-box">
    <img :src="pic.url_m" :alt="pic.title" :height="pic.height_m" :width="pic.width_m" />-->
    <!-- </div> -->
  </main>
</template>

<script>
import PhotoBox from "~/components/PhotoBox";
import { mapState } from "vuex";
export default {
  components: {
    PhotoBox
  },
  computed: {
    ...mapState(["flickrPhotos"])
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

  /* .photo-box {
    width: 45.33%;
    margin: 20px;
    text-align: center;

    img {
      size: cover;
    }
  } */
}
</style>
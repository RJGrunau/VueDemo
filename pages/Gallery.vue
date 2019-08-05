<template>
  <main>
    <PhotoBox v-for="pic in flickrPhotos" :key="pic.id" :pic="pic" />
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
}
</style>
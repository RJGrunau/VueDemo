<template>
  <main>
    yo!
    <div class="photo-box"></div>
  </main>
</template>

<script>
import Header from "~/components/Header";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["flickerPhotoStream"])
  },
  mounted() {
    this.$store.dispatch("getFlickerPhotoStream");
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 90%;
  height: calc(100vh - 100px);
  margin: 0 auto;
}
</style>
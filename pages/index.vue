<template>
  <main>
    <div class="background">
      <Camera />
    </div>
  </main>
</template>

<script>
import Camera from "~/components/Camera.vue";
export default {
  components: {
    Camera
  }
};
</script>

<style <style lang="scss" scoped>
main {
  width: 100vw;
  height: calc(100vh - 100px);
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);

  .background {
    grid-column: 3/7;
    grid-row: 2/6;
  }
}
</style>

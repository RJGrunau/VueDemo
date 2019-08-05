<template>
  <main>
    <div class="name">
      <h1>Paul Holly</h1>
      <h2>A Vue Js Demo</h2>
    </div>
    <div class="camera">
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

  .name {
    grid-column: 1/3;
    grid-row: 3/4;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap column;

    h1 {
      text-transform: uppercase;
      font-size: 2.5rem;
      margin-bottom: 30px;
    }

    h3 {
      font-size: 1.8rem;
      margin-bottom: 30px;
    }
  }

  .camera {
    grid-column: 3/7;
    grid-row: 2/5;
    margin-top: 100px;
    margin-bottom: 10px;
  }
}
</style>

<template>
  <figure class="photo-box">
    <img :src="pic.url_m" :alt="pic.description" :height="pic.height_m" :width="pic.width_m" />
  </figure>
</template>

<script>
export default {
  props: ["pic"]
};
</script>

<style lang="scss" scoped>
.photo-box {
  width: 45.33%;
  margin: 5px;
  text-align: center;

  img {
    size: cover;
  }
}
</style>
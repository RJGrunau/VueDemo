<template></template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  width: 90%;
  height: calc(100vh - 100px);
  margin: 0 auto;
  display: flex;
  flex-flow: wrap row;

  .photo-box {
    width: 45.33%;
    margin: 20px;
    text-align: center;

    img {
      size: cover;
    }
  }
}
</style>
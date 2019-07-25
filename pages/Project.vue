<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["githubProjects"])
  },
  mounted() {
    this.$store.dispatch("getGithubProjects");
  }
};
</script>

<style lang="scss" scoped>
</style>
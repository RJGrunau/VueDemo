<template>
  <main>
    <section class="projects"></section>
    <div></div>
  </main>
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
main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .projects {
    grid-area: 1 / 1 / 6 / 4;
  }
  .about {
    grid-area: 1 / 4 / 6 / 6;
  }
}
</style>
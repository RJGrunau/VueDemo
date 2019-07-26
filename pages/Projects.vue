<template>
  <main>
    <section class="projects">
      <div v-for="project in githubProjects" :key="project.id">
        <h3>{{project.name}}</h3>
        <p>{{project.description}}</p>
        <a :href="project.html_url">
          <span>Learn More Here...</span>
        </a>
      </div>
    </section>
    <section class="about">
      <p>Hey, I'm a dude who couldn't hack it (HA! Git it???) as a programer and now I take photos for a living. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium voluptatem a inventore illum? Atque, cumque. Ducimus commodi a tempora, rerum rem ut asperiores doloribus deserunt unde recusandae expedita optio?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dignissimos consequuntur ipsum voluptatibus nisi illum labore soluta deleniti aut, cupiditate accusamus eius quis autem quibusdam nobis asperiores vitae. Unde, cumque!</p>
    </section>
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
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  .projects {
    grid-area: 1 / 1 / 6 / 4;
    padding: 20px;

    div {
      margin: 5px;
      margin-bottom: 25px;
      padding: 10px;
      background: rgb(250, 249, 249);
      border-radius: 4px 4px 4px 7px;
      h3 {
        margin: 5px;
      }
      h3:before {
        content: "💻";
        margin-right: 3px;
      }

      p {
        width: 70%;
        margin: 5px;
        padding: 5px;
        font-size: 0.9rem;
        line-height: 1.5rem;
      }

      a,
      a:visited {
        color: rgb(12, 11, 11);
        margin: 5px;
        margin-top: 20px;
        span {
          font-weight: semi-bold;
          font-size: 1rem;
        }
      }
    }
    div:nth-child(even) {
      background: rgb(233, 232, 232);
    }
  }
  .about {
    grid-area: 1 / 4 / 6 / 6;
    margin: 5px;
    padding: 10px;
    border-right: 2px solid #646464;

    p{
      margin: 5px;
      margin-bottom: 10px;
      padding: 5px;
    }
  }
}
</style>
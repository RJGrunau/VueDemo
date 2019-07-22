<template>
  <header>
    <div class="logo">Logo</div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/gallery">Gallery</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 100px;
  padding: 30px 10px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    width: 25%;

    ul {
      padding-left: 0;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
      li {
        margin: 20px;

        a,
        a:visted {
          text-decoration: none;
          color: rgb(26, 24, 24);
        }
      }
    }
  }
}
</style>
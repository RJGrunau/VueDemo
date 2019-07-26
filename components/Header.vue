<template>
  <header>
    <div class="logo">
      <nuxt-link class="logo-link" exact to="/">
        <span role="logo" aria-label="logo">📸 Front-End Photo</span>
      </nuxt-link>
    </div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/gallery">Gallery</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects">Projects</nuxt-link>
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

  div {
    font-size: 2rem;
    margin-left: 10px;
    .logo-link,
    .logo-link:visited {
      text-decoration: none;
      color: rgb(26, 24, 24);
    }

    span {
      text-transform: uppercase;
    }
  }
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
        a:visited,
        a:active {
          text-decoration: none;
          color: rgb(26, 24, 24);
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
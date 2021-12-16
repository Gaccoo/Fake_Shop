<template>
  <header class="header">
    <div class="header-top">
      Up to 50% off with code "CHRISTMAS" at checkout
    </div>
    <div class="header-bottom">
      <div class="logo-wrapper">
        <img class="logo" alt="Vue logo" src="@/assets/logo.png" />
        <div class="text-wrapper">
          <span>Vue.js</span>
          <span>shop</span>
        </div>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/delivery">Delivery</router-link> |
        <router-link to="/about">Contacts</router-link>
      </div>
      <SearchBar />

      <div class="header-controls">
        <div class="user-wrapper">Log in / Register</div>

        <div class="cart-wrapper">
          <span>Wishlist</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  </header>
  <div class="page">
    <router-view />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import { defineComponent } from "vue";
export default defineComponent({
  components: { SearchBar },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url("assets/background.jpg");
}

#nav {
  padding: 10px 30px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  width: 100%;
  background-color: black;

  & .header-top {
    background-color: deepskyblue;
    padding: 5px;
    color: #fff;
  }

  & .header-bottom {
    background-color: #302d2d;
    display: flex;
    padding: 20px 50px;
    color: #fff;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }

  & .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .logo-wrapper {
    display: flex;
    gap: 20px;
  }
}

.logo {
  width: 50px;
}

.page {
  padding: 20px;
  min-height: 100vh;
}

.header-controls {
  display: flex;
  gap: 20px;
}
</style>

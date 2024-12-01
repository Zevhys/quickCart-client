<template>
  <div>
    <NavbarView />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import NavbarView from "./components/NavbarView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

<style>
* {
  color-scheme: dark;
  box-sizing: border-box;
  font-family: sans-serif;
  text-decoration: none;
}

#page-wrap {
  margin: auto;
  max-width: 800px;
  min-height: calc(100vh - 75px);
}

button {
  background-color: #41b883;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  outline: 0;
  padding: 16px;
  width: 100%;
}
</style>

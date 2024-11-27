<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'product-detail', params: { id: 123 } }">
      Product Detail
    </router-link>
    <router-link :to="{ name: 'cart' }">Cart</router-link>
  </nav>
  <router-view />
</template>

<style>
* {
  color-scheme: dark;
  box-sizing: border-box;
  font-family: sans-serif;
}

#page-wrap {
  margin: auto;
  max-width: 800px;
  min-height: 100vh;
}

button {
  background-color: #41b883;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: 0;
  padding: 16px;
}
</style>

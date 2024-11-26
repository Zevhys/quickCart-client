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
html {
  color-scheme: dark;
  font-family: sans-serif;
}
</style>

<template>
  <div class="product-item">
    <img
      :src="`http://localhost:8000${product.imageUrl}`"
      :alt="`Image of ${product.name}`"
      loading="lazy"
    />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">Rp{{ product.price }}</p>
    <router-link :to="{ name: 'product-detail', params: { id: product.code } }">
      <button>Detail</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin: 0.8em;
  padding: 20px;
  position: relative;
  top: 5em;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
  border-radius: 5%;
}

a {
  width: 100%;
}
</style>

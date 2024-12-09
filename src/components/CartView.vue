<template>
  <div class="product-container">
    <img
      :src="`http://localhost:8000${item.imageUrl}`"
      :alt="`Image of ${item.name}`"
      class="product-image"
    />
    <div class="details-wrap">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }}</p>
    </div>
    <div class="quantity-control">
      <button @click="$emit('decrease-quantity', item.code)">-</button>
      <span>{{ item.quantity }}</span>
      <button @click="$emit('increase-quantity', item.code)">+</button>
      &nbsp;
      <button @click="$emit('remove-item', item.code)">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.product-container {
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.quantity-control button {
  padding: 4px 8px;
  background-color: #00bcd4;
  border: none;
  border-radius: 4px;
}
</style>

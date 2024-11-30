<template>
  <div>
    <div id="page-wrap">
      <div class="line"></div>
      <CartView v-for="item in cartItems" :key="item.id" :item="item" />
      <h3 id="total-price">Total : {{ totalPrice }}</h3>
      <button id="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<script>
import { cartItems } from "../../data-seed";
import CartView from "../../components/CartView.vue";

export default {
  components: {
    CartView,
  },

  data() {
    return {
      cartItems,
    };
  },

  computed: {
    totalPrice() {
      return this.cartItems
        .reduce(
          (sum, item) => sum + parseInt(item.price.replace(/\./g, ""), 10),
          0
        )
        .toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .replace(/\s/g, "");
    },
  },
};
</script>

<style scoped>
.line {
  border-bottom: 1px solid #ddd;
  margin: 0;
  margin-top: 100px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
  color: #b8860b;
}

#checkout-button {
  display: block;
  margin: 20px auto;
  width: 90%;
  max-width: 400px;
  padding: 12px;
}
</style>

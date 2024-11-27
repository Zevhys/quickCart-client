<template>
  <div>
    <div id="page-wrap">
      <div id="img-wrap">
        <img :src="product.imageUrl" :alt="`Image of ${product.name}`" />
      </div>
      <div id="product-details">
        <h2>{{ product.name }}</h2>
        <h3 id="price">Rp{{ product.price }}</h3>
        <p class="rate">Average Rating : {{ product.averageRating }}</p>
        <button id="add-to-cart">Add to Cart</button>
        <p class="desc">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../../data-seed";

export default {
  data() {
    return {
      products,
    };
  },

  computed: {
    product() {
      return this.products.find((p) => {
        return p.id === this.$route.params.id;
      });
    },
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 50%;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

.rate {
  color: #ffd700;
}

.desc {
  font-size: 16px;
  line-height: 1.5;
  color: #e0e0e0;
  text-align: justify;
}

#price {
  position: absolute;
  top: 20px;
  right: 16px;
  color: #b8860b;
}
</style>

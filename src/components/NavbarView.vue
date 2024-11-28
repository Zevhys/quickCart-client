<template>
  <div id="nav-bar">
    <router-link :to="{ name: 'home' }" id="products-link">
      <h1>Store</h1>
    </router-link>
    <router-link :to="{ name: 'cart' }" id="cart-link">
      <button>Cart</button>
    </router-link>
  </div>
</template>

<style scoped>
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
}

#products-link {
  text-align: center;
  display: block;
  color: #41b883;
  font-size: 22px;
  left: 32px;
  position: absolute;
  top: 16px;
}

#products-link h1 {
  margin: 0;
}

#cart-link {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>

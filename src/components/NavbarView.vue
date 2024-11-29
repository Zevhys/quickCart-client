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
  top: 0;
  background-color: #2e665c;
  height: 75px;
  width: 100%;
  position: fixed;
  z-index: 9999;
}

#products-link {
  text-align: center;
  display: block;
  color: #6cc9ae;
  font-size: 22px;
  left: 10px;
  top: 10px;
  position: absolute;
}

#products-link h1 {
  margin: 0;
}

#cart-link {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 0;
}
</style>

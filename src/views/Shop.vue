<template>
  <div class="shop">
    <main class="container-fluid py-md-0">
      <h1>Carrusel</h1>
      <Carrusel />
      <h1>Products</h1>
      <Products />
    </main>
  </div>
</template>

<script>
import Products from "@/components/Products";
import Carrusel from "@/components/Carrusel";
export default {
  components: { Carrusel, Products },
}
</script>
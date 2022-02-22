<template>
  <div class="checkout">
    <main class="container-fluid py-md-0">
      <div class="row">
        <div class="col-lg-7 col-md-12">
          <Form />
        </div>

        <div class="col-lg-5 col-md-12">
          <Carrito />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Form from "@/components/Form";
import Carrito from "@/components/Carrito";
export default {
  components: {Form, Carrito}
}
</script>

<style scoped>

</style>
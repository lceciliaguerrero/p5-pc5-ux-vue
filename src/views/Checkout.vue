<template>
  <div class="checkout">
    <main class="container-fluid py-md-0">
      <div class="row">
        <Form />
        <div class="col-sm-5">
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
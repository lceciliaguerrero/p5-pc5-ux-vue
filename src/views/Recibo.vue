<template>
  <div class="recibo">
    <main class="container-fluid py-md-0">
      <div class="card border-0 mb-3 bg-transparent">
        <div class="row g-0 d-flex justify-content-around align-items-center">
          <div class="col-lg-7 col-md-12 d-block justify-content-center align-self-center">
            <div class="card-body me-md-7">
              <h5 class="card-title text-naranja-texto fs-2 lh-lg">Datos del Comprador</h5>
              <DatosComprador />
            </div>
          </div>
          <div class="col-lg-5 col-md-12">
            <DatosCarrito />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DatosComprador from "@/components/DatosComprador";
import DatosCarrito from "@/components/DatosCarrito";
export default {
  name: "Recibo",
  components: {DatosCarrito, DatosComprador}
}
</script>

<style scoped>

</style>
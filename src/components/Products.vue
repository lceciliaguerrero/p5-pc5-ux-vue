<template>
  <div class="poroducts">
    <div class="d-flex justify-content-md-between">
      <div class="flex-row ">
        <div class="flex-column bg-transparent">
          <div class="row row-cols-md-3">
            <div class="col-sm-auto px-md-5">
              <div class="card">
                <div class="card-header bg-transparent">
                  <img src="../assets/img/products/product1.webp" class="card-img-top" alt="Arándano rojo">
                </div>
                <div class="card-body">
                  <p class="card-text texto-justificado fs-8 lh-sm text-grey-texto">Arándano rojo 2.00€ la unidad</p>
                </div>
                <div class="card-footer text-center">
                  <p class="nav d-flex flex-column card-text">
                    <small class="text-muted nav-item">
                      <input
                          class="border border-2 p-md-0 border-naranja-texto-oscuro user-select-none btn btn-lg button-degradado text-white fs-3"
                          type="button" name="comprarFrita1" value="comprar">
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-auto px-md-5">
              <div class="card">
                <div class="card-header bg-transparent">
                  <img src="../assets/img/products/product2.webp" class="card-img-top" alt="manzana">
                </div>
                <div class="card-body">
                  <p class="card-text texto-justificado fs-8 lh-sm text-grey-texto">Manzana 0.50€ la unidad</p>
                </div>
                <div class="card-footer text-center">
                  <p class="nav d-flex flex-column card-text">
                    <small class="text-muted nav-item">
                      <input
                          class="border border-2 p-md-0 border-naranja-texto-oscuro user-select-none btn btn-lg button-degradado text-white fs-3"
                          type="button" name="comprarFrita2" value="comprar">
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-auto px-md-5">
              <div class="card">
                <div class="card-header bg-transparent">
                  <img src="../assets/img/products/product3.webp" class="card-img-top" alt="tomate">
                </div>
                <div class="card-body">
                  <p class="card-text texto-justificado fs-8 lh-sm text-grey-texto">Tomate 0.10€ la unidad</p>
                </div>
                <div class="card-footer text-center">
                  <p class="nav d-flex flex-column card-text">
                    <small class="text-muted nav-item">
                      <input
                          class="border border-2 p-md-0 border-naranja-texto-oscuro user-select-none btn btn-lg button-degradado text-white fs-3"
                          type="button" name="comprarFrita3" value="comprar">
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="position-sticky">
        <h3>Carrito</h3>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Products",

}
</script>

<style scoped>

</style>
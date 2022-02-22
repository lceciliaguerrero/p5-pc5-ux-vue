<template>
  <div class="col bg-transparent">
    <div class="card-group row">
      <div v-for="prod in listProducts" v-bind:key="prod.id" class="px-sm-1 col-sm-4">
        <div class="card">
          <div class="card-header bg-transparent">
            <img v-bind:src="prod.imagen" class="card-img-top" v-bind:alt="prod.nombre">
          </div>
          <div class="card-body">
            <p class="card-text texto-justificado fs-8 lh-sm text-naranja-texto fw-bold text-capitalize text-center">
              {{ prod.nombre }}</p>
            <p class="card-text texto-justificado fs-8 lh-sm text-grey-texto">{{ prod.precio }} € la unidad</p>
          </div>
          <div class="card-footer text-center">
            <p class="nav d-flex flex-column card-text">
              <small class="text-muted nav-item">
                <input
                    class="border border-2 p-md-0 border-naranja-texto-oscuro user-select-none btn btn-lg button-degradado text-white fs-3"
                    type="button" name="comprarFrita1" value="comprar" v-on:click="comprarProducto(prod)">
                <!-- v-on:click="comprarFrita1"-->
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      listProducts: [
        {
          id: 0,
          imagen: require('@/assets/img/products/product1.webp'),
          nombre: 'Arándano rojo',
          precio: 2.00.toFixed(2),
          moneda: 'euro',
          unidades: 0
        },
        {
          id: 1,
          imagen: require('@/assets/img/products/product2.webp'),
          nombre: 'Manzana',
          precio: 0.50.toFixed(2),
          moneda: 'euro',
          unidades: 0
        },
        {
          id: 2,
          imagen: require('@/assets/img/products/product3.webp'),
          nombre: 'Tomate Cherri',
          precio: 0.10.toFixed(2),
          moneda: 'euro',
          unidades: 0
        }
      ],
      listProductsComp: [],
      total: 0.00.toFixed(2)
    }
  },
  methods: {
    comprarProducto(prod) {
      /*let searchProductFind = this.listProductsComp.find((produc) => product.id === produc.id);
      let pr = searchProductFind.length > 0;
      if (pr === false) {
        this.listProductsComp.push(product);
      } else {
        pr[0].unidades += prod.unidades;
      }
      prod.unidades = 1;
      let searchProduct = this.listProductsComp.findIndex((produc) => product.id === produc.id);
      if (searchProduct === -1) {
        this.listProductsComp.push(product);
      }*/
      this.$store.commit('comprarProducto', prod);
    },
    anyadirCantidad(prod) {
      /*let searchProduct = this.listProductsComp.findIndex((produc) => cantidad.id === produc.id);
      console.log(this.listProductsComp[searchProduct].unidades);
      if (this.listProductsComp[searchProduct].unidades < 10) {
        this.listProductsComp[searchProduct].unidades += 1;
      }
      console.log('cantidad maxima')*/
      this.$store.commit('anyadirCantidad', prod);
    },
    eliminarCantidad(prod) {
      /*let searchProduct = this.listProductsComp.findIndex((produc) => cantidad.id === produc.id);
      if (this.listProductsComp[searchProduct].unidades > 0) {
        this.listProductsComp[searchProduct].unidades -= 1;
      }
      console.log('cantidad minima');*/
      this.$store.commit('eliminarCantidad', prod);

    },
    eliminarProducto(prod) {
      /*let searchProduct = this.listProductsComp.findIndex((produc) => prod.id === produc.id);
      this.listProductsComp.splice(searchProduct.id, 1);*/
      this.$store.commit('eliminarProducto', prod);
    }
  }
}
</script>

<style scoped>

</style>
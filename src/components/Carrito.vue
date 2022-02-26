<template>
  <h3 class="text-grey-texto">Carrito</h3>
  <table class="table text-center table-responsive">
    <thead class="text-naranja-texto">
    <tr>
      <th>Nombre</th>
      <th colspan="3">Unidades</th>
      <th>Precio por unidad</th>
      <th>Acciones</th>
    </tr>
    </thead>
    <tbody class="text-grey-texto">
    <tr v-for="pro in $store.state.carrito" v-bind:key="pro.id">
      <td>{{ pro.nombre }}</td>
      <td class="text-end">
        <button class="border-0 bg-transparent user-select-none" type="button" v-on:click="anyadirCantidad(pro)">+
        </button>
      </td>
      <td>{{ pro.unidades }}</td>
      <td class="text-start">
        <button class="border-0 bg-transparent user-select-none" type="button" v-on:click="eliminarCantidad(pro)">-
        </button>
      </td>
      <td class="text-end">{{ pro.precio }} €</td>
      <td>
        <button class="border-0 bg-transparent user-select-none" type="button" v-on:click="eliminarProducto(pro)"><i
            class="far fa-trash-alt"></i></button>
      </td>
    </tr>
    </tbody>
    <tfoot class="text-grey-texto">
    <tr>
      <td colspan="2">
        Total
      </td>
      <td class="text-end" colspan="4">{{ $store.getters.getImprimirTotal }} €</td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "Carrito",
  methods: {
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
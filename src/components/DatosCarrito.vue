<template>
  <div>
    <table class="table text-center table-responsive">
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Unidades</th>
        <th>Precio por unidad</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pro in $store.state.carrito" v-bind:key="pro.id">
        <td>{{ pro.nombre }}</td>
        <td>{{ pro.unidades }}</td>
        <td class="text-end">{{ pro.precio }} €</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="2">
          Total
        </td>
        <td class="text-end" colspan="4">{{ $store.getters.getImprimirTotal }} €</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "DatosCarrito"
}
</script>

<style scoped>

</style>